class TestdataController < ApplicationController

    def index
        @testdata = Testdatum.all
        render json: @testdata
    end
    
end
