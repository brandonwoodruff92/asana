class EmailValidator < ActiveModel::Validator
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  def validate(record)
    unless VALID_EMAIL_REGEX.match?(record.email)
      record.errors.add(:invalid, "Please include an '@' in the email address. '#{record.email}' is missing an '@'")
    end
  end
end
