class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  after_initialize :ensure_session_token

  validate :valid_email

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :team_associations,
  foreign_key: :member_id,
  class_name: "TeamAssociation"

  has_many :user_projects,
  foreign_key: :user_id,
  class_name: "UserProject"

  belongs_to :team,
  foreign_key: :team_id,
  class_name: "Team"

  has_many :projects,
  -> { distinct },
  through: :user_projects,
  source: :project

  has_many :tasks,
  foreign_key: :assignee_id,
  class_name: "Task"

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.password_digest)
    bcrypt_password.is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def valid_email
    unless VALID_EMAIL_REGEX.match?(self.email)
      self.errors.add(:email, "Please include an '@' in the email address. '#{self.email}' is missing an '@'")
    end
  end
end
