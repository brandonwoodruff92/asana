class TaskChannel < ApplicationCable::Channel
  def subscribed
    stream_for "task_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak_task(data)
    task = data;
    task.delete("action")
    TaskChannel.broadcast_to("task_channel", task)
  end
end
