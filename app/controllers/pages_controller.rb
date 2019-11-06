class PagesController < ApplicationController
  def home
    @time = Time.current
  end
end
