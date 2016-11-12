function test_svd()
    println("-- Testing SVD-based recommender")

    m = [NaN 3 NaN 1 2 1 NaN 4
         1 2 NaN NaN 3 2 NaN 3
         NaN 2 3 3 NaN 5 NaN 1]
    da = DataAccessor(m)

    recommender = SVD(da, 2)
    build(recommender)

    # dimensionality reduction should preserve user-user/item-item similarities
    # i.e., recommendation list should be same as ItemKNN
    rec = execute(recommender, 1, 4, ["item$(i)" for i in 1:8])
    @test first(rec[1]) == "item8"
    @test first(rec[2]) == "item2"
    @test first(rec[3]) == "item5"
    @test first(rec[4]) == "item6"
end

test_svd()