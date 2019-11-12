class Courseload < ApplicationRecord
    has_many :selects
    has_many :users, through: :selects
end
