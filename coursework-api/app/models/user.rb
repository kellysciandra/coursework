class User < ApplicationRecord
    has_many :selects
    has_many :courseloads, through: :selects
end
