# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string
#
class User < ApplicationRecord
  attr_reader :password
  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  after_initialize :ensure_token

  has_many :notes,
  foreign_key: :author_id,
  class_name: "Note"

  has_many :notebooks,
  foreign_key: :author_id,
  class_name: "Notebook"

  has_many :tags

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def ensure_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def is_password?(plaintxt)
    BCrypt::Password.new(password_digest).is_password?(plaintxt)
  end

  def password=(plaintxt)
    @password = plaintxt
    self.password_digest = BCrypt::Password.create(plaintxt)
  end

  def reset_token!
    update!(session_token: SecureRandom::urlsafe_base64)
    session_token
  end
end
