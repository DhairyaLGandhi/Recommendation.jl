var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Recommendation.jl-1",
    "page": "Home",
    "title": "Recommendation.jl",
    "category": "section",
    "text": "Recommendation.jl is a Julia package for building recommender systems. Thanks to independent data accessor and recommender implementations, this package enables you to build recommendation systems on your own data and algorithms.For more information, you can refer to my article."
},

{
    "location": "getting_started/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "getting_started/#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": ""
},

{
    "location": "getting_started/#Installation-1",
    "page": "Getting Started",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl.Pkg.add(\"Recommendation\")"
},

{
    "location": "getting_started/#Usage-1",
    "page": "Getting Started",
    "title": "Usage",
    "category": "section",
    "text": "This package contains DataAccessor and several fundamental recommendation techniques (e.g., non-personalized MostPopular recommender, CF and MF), and evaluation metrics such as Recall. All of them can be accessible by loading the package as follows:using RecommendationFirst of all, you need to create a data accessor from a matrix:using SparseArrays\n\nda = DataAccessor(sparse([1 0 0; 4 5 0]))or set of events:const n_user = 5\nconst n_item = 10\n\nevents = [Event(1, 2, 1), Event(3, 2, 1), Event(2, 6, 4)]\n\nda = DataAccessor(events, n_user, n_item)where Event() is a composite type which represents a user-item interaction:type Event\n    user::Int\n    item::Int\n    value::Float64\nendNext, you can pass the data accessor to an arbitrary recommender as:recommender = MostPopular(da)and building a recommendation engine should be easy:build(recommender)Personalized recommenders sometimes require us to specify the hyperparameters:recommender = MF(da, Parameters(:k => 2))\nbuild(recommender, learning_rate=15e-4, max_iter=100)Once a recommendation engine has been built successfully, top-k recommendation for a user u with item candidates candidates is performed as follows:u = 4\nk = 2\ncandidates = [i for i in 1:n_item] # all items\n\nrecommend(recommender, u, k, candidates)"
},

{
    "location": "notation/#",
    "page": "Notation",
    "title": "Notation",
    "category": "page",
    "text": ""
},

{
    "location": "notation/#Notation-1",
    "page": "Notation",
    "title": "Notation",
    "category": "section",
    "text": "This page lists basic notations used throughout the documentation. First, let a set of users and items be mathcalU and mathcalI, respectively. We then define a set of true observation of items for a user u in mathcalU by mathcalI^+_u as a subset of mathcalI, and mathcalI setminus mathcalI^+_u is symmetrically denoted by mathcalI^-_u. Since a recommender returns permutation of items, I(u) will denote an ordered set of items in mathcalI optimized for u based on a certain scoring procedure. Additionally, an ordered set I_N(u) holds only top-N items of I(u).In this documentation, a d times n matrix A in mathbbR^d times n can also be represented as a set of n columns leftmathbfa_1 mathbfa_2 cdots mathbfa_nright where mathbfa_i is a vector in mathbbR^d. Here, let R in mathbbR^mathcalU times mathcalI be a user-item matrix denoting interactions between users and items. The matrix can be both binary and integer matrix depending on a problem. In case that we have two matrices A and B which have the same number of rows, leftA B right will indicate horizontal concatenation of them. The matrices 0_dn and I_d respectively mean a d-by-n zero matrix and d-dimensional identity matrix. For a d-dimensional vector mathbfx = (x_1 x_2 cdots x_d),  cdot  will denote the Euclidean norm of the vector  mathbfx  = sqrtsum_i x^2_i. The Frobenius norm of a matrix A is A_F = sqrtsum_i mathbfa_i^2, and the operator norm of the matrix is defined as A = sup_mathbfx=1 A mathbfx.The notation mathrmnnz(mathbfx) and mathrmnnz(A) refer to the number of nonzero elements in a vector mathbfx and matrix A, respectively. Finally, mathbb1_mathcalX(x) will denote an indicator function which returns 1 if x in mathcalX, and 0 otherwise."
},

{
    "location": "baseline/#",
    "page": "Non-Personalized Baselines",
    "title": "Non-Personalized Baselines",
    "category": "page",
    "text": ""
},

{
    "location": "baseline/#Recommendation.CoOccurrence",
    "page": "Non-Personalized Baselines",
    "title": "Recommendation.CoOccurrence",
    "category": "type",
    "text": "CoOccurrence(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:i_ref => 1)\n)\n\nRecommend items which are most frequently co-occurred with a reference item i_ref.\n\n\n\n\n\n"
},

{
    "location": "baseline/#Recommendation.MostPopular",
    "page": "Non-Personalized Baselines",
    "title": "Recommendation.MostPopular",
    "category": "type",
    "text": "MostPopular(da::DataAccessor)\n\nRecommend most popular items.\n\n\n\n\n\n"
},

{
    "location": "baseline/#Recommendation.ThresholdPercentage",
    "page": "Non-Personalized Baselines",
    "title": "Recommendation.ThresholdPercentage",
    "category": "type",
    "text": "ThresholdPercentage(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:th => 2.5)\n)\n\nRecommend based on percentage of ratings which are greater than a certain threshold value th.\n\n\n\n\n\n"
},

{
    "location": "baseline/#Recommendation.UserMean",
    "page": "Non-Personalized Baselines",
    "title": "Recommendation.UserMean",
    "category": "type",
    "text": "UserMean(da::DataAccessor)\n\nRecommend based on global user mean rating.\n\n\n\n\n\n"
},

{
    "location": "baseline/#Recommendation.ItemMean",
    "page": "Non-Personalized Baselines",
    "title": "Recommendation.ItemMean",
    "category": "type",
    "text": "ItemMean(da::DataAccessor)\n\nRecommend based on global item mean rating.\n\n\n\n\n\n"
},

{
    "location": "baseline/#Non-Personalized-Baselines-1",
    "page": "Non-Personalized Baselines",
    "title": "Non-Personalized Baselines",
    "category": "section",
    "text": "Pages = [\"baseline.md\"]CoOccurrence\nMostPopular\nThresholdPercentage\nUserMean\nItemMean"
},

{
    "location": "collaborative_filtering/#",
    "page": "Collaborative Filtering",
    "title": "Collaborative Filtering",
    "category": "page",
    "text": ""
},

{
    "location": "collaborative_filtering/#Collaborative-Filtering-1",
    "page": "Collaborative Filtering",
    "title": "Collaborative Filtering",
    "category": "section",
    "text": "Since datasets on conventional recommender systems are commonly represented as a user-item matrix R in mathbbR^mathcalU times mathcalI, this page specially focuses on the matrix completion techniques for recommendation. A key idea of matrix-completion-based recommendation is to predict missing values in R and figure out the most promising items to a target user as follows:(Image: user-item-matrix)To give an example, for a user a, item 2 and 4 are unobserved. In this case, what a recommender does is to predict the missing elements and decides which item is more likely to be preferred by the user.In particular, collaborative filtering (CF) is one of the most popular matrix-completion-based recommenders which was originally introduced by Goldberg et al. in 1992. The goal of CF algorithm is to suggest new items for a particular user by modeling user-user and item-item similarities. From a users\' perspective, CF assumes that users who behaved similarly on a service share common tastes for items. On the other hand, items which resemble each other are likely to be preferred by the same users."
},

{
    "location": "collaborative_filtering/#Recommendation.UserKNN",
    "page": "Collaborative Filtering",
    "title": "Recommendation.UserKNN",
    "category": "type",
    "text": "UserKNN(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:k => 5),\n    is_normalized::Bool=false\n)\n\nUser-based CF using the Pearson correlation. k represents number of neighbors, and is_normalized specifies if weighted sum of neighbors\' rating is normalized.\n\nThe technique gives a weight to a user-user pair by the following equation:\n\ns_u v = frac sum_i in mathcalI^+_u cap v  (r_u i - overliner_u) (r_v i - overliner_v)\n sqrtsum_i in mathcalI^+_u cap v (r_ui - overliner_u)^2 sqrtsum_i in mathcalI^+_u cap v (r_v i - overliner_v)^2 \n\nwhere mathcalI^+_u cap v is a set of items which were observed by both user u and v, and r_u i indicates a (u i) element in R. Plus, overliner_u and overliner_v are respectively mean values of r_u i and r_v i over i in mathcalI^+_u cap v. By using the weights, user-based CF selects the top-k highest-weighted users (i.e., nearest neighbors) of a target user u, and predicts missing r_u i for i in mathcalI^-_u as:\n\nr_u i = overliner_u + fracsum^k_t=1 left(r_sigma(t) i - overliner_sigma(t)right) cdot s_usigma(t)  sum^k_t=1 s_usigma(t) \n\nwhere sigma(t) denotes the t-th nearest-neighborhood user. Ultimately, sorting items mathcalI^-_u by the predicted values enables us to make recommendation to a user u.\n\nIt should be noted that user-based CF is highly inefficient because gradually increasing massive users and their dynamic tastes require us to frequently recompute the similarities for every pairs of users.\n\n\n\n\n\n"
},

{
    "location": "collaborative_filtering/#Recommendation.ItemKNN",
    "page": "Collaborative Filtering",
    "title": "Recommendation.ItemKNN",
    "category": "type",
    "text": "ItemKNN(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:k => 5)\n)\n\nItem-based CF that provides a way to model item-item concepts by utilizing the similarities of items in the CF paradigm. k represents number of neighbors.\n\nItem properties are relatively stable compared to the users\' tastes, and the number of items is generally smaller than the number of users. Hence, while user-based CF successfully captures the similarities of users\' complex tastes, modeling item-item concepts could be much more promising in terms of both scalability and overall accuracy.\n\nItem-based CF defines a similarity between an item i and j as:\n\ns_ij = frac sum_u in mathcalU_i cap j  (r_u i - overliner_i) (r_u j - overliner_j)\n sqrtsum_u in mathcalU_i cap j (r_ui - overliner_i)^2 sqrtsum_u in mathcalU_i cap j (r_u j - overliner_j)^2 \n\nwhere mathcalU_i cap j is a set of users that both of r_ui and r_u j are not missing, and overliner_i overliner_j are mean values of i-th and j-th column in R. Similarly to the user-based algorithm, for the t-th nearest-neighborhood item tau(t), prediction can be done by top-k weighted sum of target user\'s feedbacks:\n\nr_ui = fracsum^k_t=1 s_itau(t) cdot r_utau(t)  sum^k_t=1 s_itau(t) \n\nIn case that the number of items is smaller than users, item-based CF could be a more reasonable choice than the user-based approach.\n\n\n\n\n\n"
},

{
    "location": "collaborative_filtering/#k-Nearest-Neighbor-1",
    "page": "Collaborative Filtering",
    "title": "k-Nearest Neighbor",
    "category": "section",
    "text": "A k-nearest neighbor (k-NN) approach, one of the simplest CF algorithms, runs in two-fold. First, missing values in R is predicted based on the past observations. Here, a (u i) element between a target user u and item i is estimated by explicitly computing the similarities of users (items). Second, a recommender chooses top-k items from the results of the prediction step.Importantly, k-NN can be classified into a user-based and item-based algorithm. In a user-based algorithm, user-user similarities are computed for every pairs of rows in R. By contrast, item-based CF stands on column-wise similarities between items. Following figure illustrates how k-NN works on a user-item matrix R:(Image: cf)Note that the figure is inspired by a paper written by Sarwar et al.The elements are ratings in a 1 5 range for each user-item pair, so 1 and 2 mean relatively negative feedback and vice versa. In the figure, user a and c seem to have similar tastes because both of them gave nearly identical feedback to item 1, 4 and 6. From an item-item perspective, item 4 and 6 are similarly rated by user a, b and c.In order to measure the similarities between rows (columns), the Pearson correlation and cosine similarity are widely used. For d-dimensional vectors mathbfx mathbfy in mathbbR^d, the Pearson correlation mathrmcorr(mathbfx mathbfy) and cosine similarity mathrmcos(mathbfx mathbfy) are respectively defined as:mathrmcorr(mathbfx mathbfy) = fracsum_i (x_i - overlinex)(y_i - overliney)sqrtsum_i (x_i - overlinex)^2 sqrtsum_i (y_i - overliney)^2mathrmcos(mathbfx mathbfy) = fracmathbfx cdot mathbfy mathbfx   mathbfy  = fracsum_i x_i y_isqrtsum_i x_i^2 sqrtsum_i y_i^2where overlinex = frac1d sum^d_i=1 x_i and overliney = frac1d sum^d_i=1 y_i denote mean values of the elements in a vector. Additionally, in a context of data mining, elements in mathbfx and mathbfy can be distributed on a different scale, so mean-centering of the vectors usually leads better results as shown by Sarwar et al. Notice that cosine similarity between the mean-centered vectors, hatmathbfx = (x_1 - overlinex x_2 - overlinex dots x_n - overlinex) and hatmathbfy = (y_1 - overliney y_2 - overliney dots y_n - overliney), is mathematically equivalent to the Pearson correlation mathrmcorr(mathbfx mathbfy) as follows:mathrmcos(hatmathbfx hatmathbfy) = fracsum_i (x_i - overlinex)(y_i - overliney)sqrtsum_i (x_i - overlinex)^2 sqrtsum_i (y_i - overliney)^2 = mathrmcorr(mathbfx mathbfy)UserKNN\nItemKNN"
},

{
    "location": "collaborative_filtering/#Recommendation.SVD",
    "page": "Collaborative Filtering",
    "title": "Recommendation.SVD",
    "category": "type",
    "text": "SVD(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:k => 20)\n)\n\nRecommendation based on SVD of a user-item matrix R in mathbbR^mathcalU times mathcalI, which was originally studied by Sarwar et al. Rank k is configured by k.\n\nIn a context of recommendation, U_k in mathbbR^mathcalU times k, V in mathbbR^mathcalI times k and Sigma in mathbbR^k times k are respectively seen as k user/item feature vectors and corresponding weights. The idea of low-rank approximation that discards lower singular values intuitively works as compression or denoising of the original matrix; that is, each element in a rank-k matrix A_k holds the best compressed (or denoised) value of the original element in A. Thus, R_k = mathrmSVD_k(R), the best rank-k approximation of R, captures as much as possible of underlying users\' preferences. Once R is decomposed into U Sigma and V, a (u i) element of R_k calculated by sum^k_j=1 sigma_j u_u j v_i j could be a prediction for the user-item pair.\n\n\n\n\n\n"
},

{
    "location": "collaborative_filtering/#Singular-Value-Decomposition-1",
    "page": "Collaborative Filtering",
    "title": "Singular Value Decomposition",
    "category": "section",
    "text": "Along with the development of the k-NN techniques, researchers noticed that handling the original huge user-item matrices is computationally expensive. Moreover, k-NN-based recommendation leads overfitting to individual taste due to the sparsity of R. Thus, dimensionality reduction techniques were applied to recommendation in order to capture more abstract preferences.Singular value decomposition (SVD) is one of the most popular dimensionality reduction techniques which decomposes an m-by-n matrix A to U in mathbbR^m times m, Sigma in mathbbR^m times n and V in mathbbR^n times n:mathrmSVD(A) = U Sigma V^mathrmT = leftmathbfu_1 mathbfu_2 cdots mathbfu_mright mathrmdiagleft(sigma_1 sigma_2 dots sigma_min(m n)right) leftmathbfv_1 mathbfv_2 cdots mathbfv_nright^mathrmTby letting sigma_1 geq sigma_2 geq cdots geq sigma_min(m n) geq 0. An orthogonal matrix U (V) is called left (right) singular vectors which represents characteristics of columns (rows) in R, and a diagonal matrix Sigma holds singular values on the diagonal elements as weights of each singular vector.The reason why SVD can be applied to dimensionality reduction is that the most lower singular values of real-world matrices are very close to zero. Hence, using only top-k singular values Sigma_k in mathbbR^k times k and corresponding singular vectors U_k in mathbbR^m times k, V_k in mathbbR^n times k is sufficient to make reasonable rank-k approximation of a matrix A. The following figure demonstrates how SVD decomposes a matrix into rank-k matrices.(Image: svd)On top of that, mathrmSVD_k(A) is known as the best rank-k approximation of the matrix A in both the spectral and Frobenius norm. Note that the spectral norm of a matrix equals to its largest singular value.SVDSVD actually works well on user-item matrices, but the method poses some difficulties in practice. First, finding optimal k is not straightforward. Even though R_k is the best rank-k approximation of R, too small k obviously loses too much information of the original matrix, and it decreases the accuracy of recommendation. At the same time, too large k prevents taking advantage of dimensionality reduction. Hence, carefully choosing k by evaluation on a local environment is practically important.Furthermore, the following points require us to take an extra effort to make SVD feasible for recommendation:We need to preliminarily fill missing values in R to launch SVD, and there are several options such as mean imputation and zero filling.\nAlthough the original matrix R is a huge matrix in both rows and columns, SVD is a computationally expensive operation.\nExplaining how the recommendation was generated is practically important, but it is hard for SVD-based recommendation unless mathematical background is explained."
},

{
    "location": "collaborative_filtering/#Recommendation.MF",
    "page": "Collaborative Filtering",
    "title": "Recommendation.MF",
    "category": "type",
    "text": "MF(\n    da::DataAccessor,\n    hyperparams::Parameters=Parameters(:k => 20)\n)\n\nRecommendation based on matrix factorization (MF). Number of factors is configured by k.\n\nMF solves the following minimization problem for a set of observed user-item interactions mathcalS = (u i) in mathcalU times mathcalI:\n\nmin_P Q sum_(u i) in mathcalS left( r_ui - mathbfp_u^mathrmT mathbfq_i right)^2 + lambda  (mathbfp_u^2 + mathbfq_i^2)\n\nwhere mathbfp_u mathbfq_i in mathbbR^k are respectively a factorized user and item vector, and lambda is a regularization parameter to avoid overfitting. An optimal solution will be found by stochastic gradient descent (SGD). Ultimately, we can predict missing values in R by just computing PQ^mathrmT, and the prediction directly leads recommendation.\n\n\n\n\n\n"
},

{
    "location": "collaborative_filtering/#Matrix-Factorization-1",
    "page": "Collaborative Filtering",
    "title": "Matrix Factorization",
    "category": "section",
    "text": "Even though dimensionality reduction is a promising approach to make effective recommendation, SVD is not feasible enough in terms of running time and missing value imputation. As a result, a new technique generally called matrix factorization (MF) was introduced by Koren et al.The initial MF technique was invented by Funk during the Netflix Prize, and the method is called regularized SVD because it can be seen as an extension of the conventional SVD-based recommendation. Regularized SVD and the other MF techniques achieved efficient approximation of the original SVD based on gradient descent optimization, and we do not need to care about missing values in R any more. The basic idea of MF is to factorize a user-item matrix R to a user factored matrix P in mathbbR^mathcalU times k and item factored matrix Q in mathbbR^mathcalI times k as shown below. Eventually, R is approximated by PQ^mathrmT. Unlike SVD, singular values in Sigma are embedded to the factored matrices, and orthogonality is lost. Thus, taking advantage of mathematically tractable properties of SVD is unfortunately impossible for MF.(Image: mf)MFMF is attractive in terms of not only efficiency but extensibility. In the above formulation, prediction for each user-item pair can be written by a simple vector product as r_ui = mathbfp_u^mathrmT mathbfq_i, and extension of the formula is also possible. That is, we can incorporate different features (e.g., biases and temporal factors) into the model as linear combinations. For example, let mu be a global mean of all elements in R, and b_u b_i be respectively a user and item bias term. Here, we assume that each observation can be represented as r_ui = mu + b_u + b_i + mathbfp_u^mathrmT mathbfq_i. This formulation is known as biased MF, and it is possible to capture more information than the original MF even on the same set of events mathcalS.Additionally, options for loss functions are also abundant. To give an example, Chen et al. showed various types of features and loss functions which can be incorporated into a MF scheme. An appropriate choice of their combinations is likely to lead surprisingly better accuracy compared to the classical MF.It should be noted that the technique has many limitations behind great success of MF-based recommendation. Since extension of MF only allows us to append new features as linear combinations, representing more complex relationships between features is not straightforward. As a consequence, modern recommenders tend to use more complex models which are higher dimensional and hard to optimize such as tensor factorization."
},

{
    "location": "content_based_filtering/#",
    "page": "Content-Based Filtering",
    "title": "Content-Based Filtering",
    "category": "page",
    "text": ""
},

{
    "location": "content_based_filtering/#Recommendation.TFIDF",
    "page": "Content-Based Filtering",
    "title": "Recommendation.TFIDF",
    "category": "type",
    "text": "TFIDF(\n    da::DataAccessor,\n    tf::AbstractMatrix,\n    idf::AbstractMatrix\n)\n\nContent-based recommendation using TF-IDF scoring. TF and IDF matrix are respectively specified as tf and idf.\n\nMore concretely, each item is represented as a set of words, and the items are modeled by TF-IDF weighting of the words. The technique was initially used in information retrieval to model a document-word matrix. In case of our item-word matrices, for a given item i, term frequency (TF) for a term t is defined as:\n\nmathrmtf(t i) = fracn_tiN_i\n\nwhere n_ti denotes an (i t) element in I, and N_i is the total number of words that an item i contains. So, mathrmtf(t i) characterizes an item-term pair by normalized frequency of terms. Meanwhile, inverse document frequency (IDF) is computed over M items as:\n\nmathrmidf(t) = log fracMmathrmdf(t) + 1\n\nwhere mathrmdf(t) counts the number of items which associate with a term t. What mathrmidf(t) does is to decrease the effect of commonly used terms, because general words cannot characterize a specific item.\n\nFinally, each item-term pair is weighted by mathrmtf(t i) cdot mathrmidf(t) in the TF-IDF scheme. For instance, if we like to recommend web pages to users, we first need to parse sentences on a page and then construct a vector based on the frequency of each term as follows. Similarly, in case that a recommender is running on a folksonomic (i.e. social tagging) service, the frequency of tags corresponds to each dimension of a vector, and mathrmtf(t i) and mathrmidf(t) are finally calculated for each item-tag pair.\n\n(Image: tfidf)\n\n\n\n\n\n"
},

{
    "location": "content_based_filtering/#Content-Based-Filtering-1",
    "page": "Content-Based Filtering",
    "title": "Content-Based Filtering",
    "category": "section",
    "text": "All techniques introduced Collaborative Filtering rely on not only target user\'s historical behavior on a service, but also the other users\' actions. However, these kinds of recommenders easily fail due to the lack of aggregated data, and there is no way to make meaningful recommendation for new items. In order to work around the difficulty, content-based filtering is likely to be preferred in reality as discussed by Lops et al.Most importantly, content-based recommenders make recommendation without using the other users\' feedbacks. In the related studies, \"content\" indicates a set of item attributes (i.e., features or descriptors), and the content-based recommenders can take advantage of richness of item attributes on a real-world service, instead of tracking users\' actions. The recommenders, therefore, strongly focus on modeling items by assuming that users\' preferences are not change dramatically over time.In particular, a content-based approach gives scores to items based on two kinds of information: item model and user preference. In order to model the items, an item-attribute matrix is defined as: I in mathbbR^mathcalI times mathcalA, where mathcalA is a set of item attributes. Moreover, we can also construct users\' profiles for the attributes by U = RI in mathbbR^mathcalU times mathcalA, where R in mathbbR^mathcalU times mathcalI is users\' past feedbacks to the items. Each row of U denotes a vector of attributes describing user\'s profile. Note that the number of items and their attributes should be large enough on a content-based recommender. The systems do not necessarily need to have so much users instead.TFIDFFrom a practical perspective, designing attributes is essentially an important problem to launch a content-based recommender successfully. In fact, there are numerous attributes which can be incorporated into a vector space on a real-world dataset, but using too much attributes may increase sparsity and complexity of the vectors. As a consequence, inappropriate vector representation of items may show poor recommendation accuracy. Hence, we need to carefully design a vector to distribute the attributes equally.If the features were chosen appropriately, content-based recommenders could work well even on challenging settings which cannot be handled by the conventional recommenders. To give an example, when a new item is added to a system, making reasonable prediction for the item is impossible by using the classical approaches such as CF. By contrast, since content-based recommenders only require the attributes of items, new items can show up in a recommendation list with equal chance to the old items. Furthermore, explaining the results of content-based recommendation is possible because the attributes are manually selected by humans.For the reasons that we mentioned above, vector representation of item attributes and content-based recommendation are practically important strategies for real-world recommendation."
},

{
    "location": "evaluation/#",
    "page": "Evaluation",
    "title": "Evaluation",
    "category": "page",
    "text": ""
},

{
    "location": "evaluation/#Evaluation-1",
    "page": "Evaluation",
    "title": "Evaluation",
    "category": "section",
    "text": "Pages = [\"evaluation.md\"]"
},

{
    "location": "evaluation/#Recommendation.cross_validation",
    "page": "Evaluation",
    "title": "Recommendation.cross_validation",
    "category": "function",
    "text": "cross_validation(\n    rec_type::DataType,\n    hyperparams::Parameters,\n    da::DataAccessor,\n    n_fold::Int,\n    metric::Metric,\n    k::Int=0\n)\n\nConduct n_fold cross validation for a combination of recommender rec_type and metric metric with hyperparams. For ranking metric, accuracy is measured by top-k recommendation.\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Cross-validation-1",
    "page": "Evaluation",
    "title": "Cross validation",
    "category": "section",
    "text": "cross_validation"
},

{
    "location": "evaluation/#Recommendation.RMSE",
    "page": "Evaluation",
    "title": "Recommendation.RMSE",
    "category": "type",
    "text": "RMSE\n\nRoot Mean Squared Error.\n\nmeasure(\n    metric::RMSE,\n    truth::AbstractVector,\n    pred::AbstractVector\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.MAE",
    "page": "Evaluation",
    "title": "Recommendation.MAE",
    "category": "type",
    "text": "MAE\n\nMean Absolute Error.\n\nmeasure(\n    metric::MAE,\n    truth::AbstractVector,\n    pred::AbstractVector\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Rating-metric-1",
    "page": "Evaluation",
    "title": "Rating metric",
    "category": "section",
    "text": "RMSE\nMAE"
},

{
    "location": "evaluation/#Recommendation.Recall",
    "page": "Evaluation",
    "title": "Recommendation.Recall",
    "category": "type",
    "text": "Recall\n\nRecall-at-N (Recall@N) indicates coverage of truth samples as a result of top-N recommendation. The value is computed by the following equation:\n\nmathrmRecallN = fracmathcalI^+_u cap I_N(u)mathcalI^+_u\n\nHere, mathcalI^+_u cap I_N(u) is the number of true positives.\n\nmeasure(\n    metric::Recall,\n    truth::Array{T},\n    pred::Array{T},\n    k::Int\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.Precision",
    "page": "Evaluation",
    "title": "Recommendation.Precision",
    "category": "type",
    "text": "Precision\n\nPrecision-at-N (Precision@N) evaluates correctness of a top-N recommendation list I_N(u) according to the portion of true positives in the list as:\n\nmathrmPrecisionN = fracmathcalI^+_u cap I_N(u)I_N(u)\n\nmeasure(\n    metric::Precision,\n    truth::Array{T},\n    pred::Array{T},\n    k::Int\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.MAP",
    "page": "Evaluation",
    "title": "Recommendation.MAP",
    "category": "type",
    "text": "MAP\n\nWhile the original Precision@N provides a score for a fixed-length recommendation list I_N(u), mean average precision (MAP) computes an average of the scores over all recommendation sizes from 1 to mathcalI. MAP is formulated with an indicator function for i_n, the n-th item of I(u), as:\n\nmathrmMAP = frac1mathcalI^+_u sum_n = 1^mathcalI mathrmPrecisionn cdot  mathbb1_mathcalI^+_u(i_n)\n\nIt should be noticed that, MAP is not a simple mean of sum of Precision@1, Precision@2, dots, Precision@mathcalI, and higher-ranked true positives lead better MAP.\n\nmeasure(\n    metric::MAP,\n    truth::Array{T},\n    pred::Array{T}\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.AUC",
    "page": "Evaluation",
    "title": "Recommendation.AUC",
    "category": "type",
    "text": "AUC\n\nROC curve and area under the ROC curve (AUC) are generally used in evaluation of the classification problems, but these concepts can also be interpreted in a context of ranking problem. Basically, the AUC metric for ranking considers all possible pairs of truth and other items which are respectively denoted by i^+ in mathcalI^+_u and i^- in mathcalI^-_u, and it expects that the best recommender completely ranksi^+higher thani^-``, as follows:\n\n(Image: auc)\n\nAUC calculation keeps track the number of true positives at different rank in mathcalI. At line 8, the function adds the number of true positives which were ranked higher than the current non-truth sample to the accumulated count of correct pairs. Ultimately, an AUC score is computed as portion of the correct ordered (i^+ i^-) pairs in the all possible combinations determined by mathcalI^+_u times mathcalI^-_u in set notation.\n\nmeasure(\n    metric::AUC,\n    truth::Array{T},\n    pred::Array{T}\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.ReciprocalRank",
    "page": "Evaluation",
    "title": "Recommendation.ReciprocalRank",
    "category": "type",
    "text": "ReciprocalRank\n\nIf we are only interested in the first true positive, reciprocal rank (RR) could be a reasonable choice to quantitatively assess the recommendation lists. For n_mathrmtp in left 1 mathcalI right, a position of the first true positive in I(u), RR simply returns its inverse:\n\n  mathrmRR = frac1n_mathrmtp\n\nRR can be zero if and only if mathcalI^+_u is empty.\n\nmeasure(\n    metric::ReciprocalRank,\n    truth::Array{T},\n    pred::Array{T}\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.MPR",
    "page": "Evaluation",
    "title": "Recommendation.MPR",
    "category": "type",
    "text": "MPR\n\nMean percentile rank (MPR) is a ranking metric based on r_i in 0 100, the percentile-ranking of an item i within the sorted list of all items for a user u. It can be formulated as:\n\nmathrmMPR = frac1mathcalI^+_u sum_i in mathcalI^+_u r_i\n\nr_i = 0 is the best value that means the truth item i is ranked at the highest position in a recommendation list. On the other hand, r_i = 100 is the worst case that the item i is at the lowest rank.\n\nMPR internally considers not only top-N recommended items also all of the non-recommended items, and it accumulates the percentile ranks for all true positives unlike MRR. So, the measure is suitable to estimate users\' overall satisfaction for a recommender. Intuitively, mathrmMPR  50 should be worse than random ranking from a users\' point of view.\n\nmeasure(\n    metric::MPR,\n    truth::Array{T},\n    pred::Array{T}\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Recommendation.NDCG",
    "page": "Evaluation",
    "title": "Recommendation.NDCG",
    "category": "type",
    "text": "NDCG\n\nLike MPR, normalized discounted cumulative gain (NDCG) computes a score for I(u) which places emphasis on higher-ranked true positives. In addition to being a more well-formulated measure, the difference between NDCG and MPR is that NDCG allows us to specify an expected ranking within mathcalI^+_u; that is, the metric can incorporate mathrmrel_n, a relevance score which suggests how likely the n-th sample is to be ranked at the top of a recommendation list, and it directly corresponds to an expected ranking of the truth samples.\n\nmeasure(\n    metric::NDCG,\n    truth::Array{T},\n    pred::Array{T},\n    k::Int\n)\n\n\n\n\n\n"
},

{
    "location": "evaluation/#Ranking-metric-1",
    "page": "Evaluation",
    "title": "Ranking metric",
    "category": "section",
    "text": "Let a target user u in mathcalU, set of all items mathcalI, ordered set of top-N recommended items I_N(u) subset mathcalI, and set of truth items mathcalI^+_u.Recall\nPrecision\nMAP\nAUC\nReciprocalRank\nMPR\nNDCG"
},

]}
