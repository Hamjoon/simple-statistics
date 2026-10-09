# Coverage at t

All groups use nyc on the built CommonJS bundle with source-map attribution to `src/`.

| Group | Statements covered/total | Statements % | Branches covered/total | Branches % | Functions % | Lines % |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| loading | 26/995 | 2.61 | 0/355 | 0 | 0.8 | 2.61 |
| llm | 949/995 | 95.37 | 324/355 | 91.26 | 97.6 | 95.41 |
| dev | 992/995 | 99.69 | 344/355 | 96.9 | 100 | 99.67 |
| Paper loading | — | 2.6 | — | 0.0 | — | — |
| Paper S | — | 87.8 | — | 71.3 | — | — |

Mocha S: 305 passes, 0 failures. Developer files: 70 exit 0.

## llm per-source statement coverage

| Source | Covered/total | % |
| --- | ---: | ---: |
| add_to_mean.js | 1/1 | 100 |
| approx_equal.js | 2/2 | 100 |
| bayesian_classifier.js | 28/29 | 96.55 |
| bernoulli_distribution.js | 3/3 | 100 |
| binomial_distribution.js | 12/12 | 100 |
| bisect.js | 11/11 | 100 |
| chi_squared_distribution_table.js | 1/1 | 100 |
| chi_squared_goodness_of_fit.js | 0/30 | 0 |
| chunk.js | 9/9 | 100 |
| ckmeans.js | 74/75 | 98.66 |
| coefficient_of_variation.js | 1/1 | 100 |
| combinations.js | 10/10 | 100 |
| combinations_replacement.js | 10/10 | 100 |
| combine_means.js | 1/1 | 100 |
| combine_variances.js | 2/2 | 100 |
| cumulative_std_logistic_probability.js | 1/1 | 100 |
| cumulative_std_normal_probability.js | 5/5 | 100 |
| epsilon.js | 1/1 | 100 |
| equal_interval_breaks.js | 11/11 | 100 |
| error_function.js | 5/5 | 100 |
| euclidean_distance.js | 6/6 | 100 |
| extent.js | 11/11 | 100 |
| extent_sorted.js | 1/1 | 100 |
| factorial.js | 9/9 | 100 |
| gamma.js | 11/11 | 100 |
| gammaln.js | 12/12 | 100 |
| geometric_mean.js | 9/9 | 100 |
| harmonic_mean.js | 9/9 | 100 |
| interquartile_range.js | 4/4 | 100 |
| inverse_error_function.js | 5/5 | 100 |
| k_means_cluster.js | 47/48 | 97.91 |
| kernel_density_estimation.js | 28/29 | 96.55 |
| linear_regression.js | 20/20 | 100 |
| linear_regression_line.js | 2/2 | 100 |
| log_average.js | 9/9 | 100 |
| logit.js | 0/3 | 0 |
| make_matrix.js | 9/9 | 100 |
| max.js | 8/8 | 100 |
| max_sorted.js | 1/1 | 100 |
| mean.js | 3/3 | 100 |
| mean_simple.js | 3/3 | 100 |
| median.js | 1/1 | 100 |
| median_absolute_deviation.js | 6/6 | 100 |
| median_sorted.js | 1/1 | 100 |
| min.js | 8/8 | 100 |
| min_sorted.js | 1/1 | 100 |
| mode.js | 1/1 | 100 |
| mode_fast.js | 15/15 | 100 |
| mode_sorted.js | 18/18 | 100 |
| numeric_sort.js | 2/2 | 100 |
| perceptron.js | 28/28 | 100 |
| permutation_test.js | 34/35 | 97.14 |
| permutations_heap.js | 20/20 | 100 |
| poisson_distribution.js | 12/12 | 100 |
| probit.js | 0/5 | 0 |
| product.js | 5/5 | 100 |
| quantile.js | 41/42 | 97.61 |
| quantile_rank.js | 2/2 | 100 |
| quantile_rank_sorted.js | 33/33 | 100 |
| quantile_sorted.js | 14/14 | 100 |
| quickselect.js | 39/39 | 100 |
| r_squared.js | 16/16 | 100 |
| relative_error.js | 3/3 | 100 |
| root_mean_square.js | 7/7 | 100 |
| sample.js | 2/2 | 100 |
| sample_correlation.js | 4/4 | 100 |
| sample_covariance.js | 12/12 | 100 |
| sample_kurtosis.js | 12/12 | 100 |
| sample_rank_correlation.js | 15/15 | 100 |
| sample_skewness.js | 15/15 | 100 |
| sample_standard_deviation.js | 2/2 | 100 |
| sample_variance.js | 5/5 | 100 |
| sample_with_replacement.js | 10/10 | 100 |
| shuffle.js | 2/2 | 100 |
| shuffle_in_place.js | 8/8 | 100 |
| sign.js | 7/7 | 100 |
| silhouette.js | 46/46 | 100 |
| silhouette_metric.js | 2/2 | 100 |
| standard_deviation.js | 4/4 | 100 |
| standard_normal_table.js | 12/12 | 100 |
| subtract_from_mean.js | 1/1 | 100 |
| sum.js | 15/16 | 93.75 |
| sum_nth_power_deviations.js | 9/9 | 100 |
| sum_simple.js | 7/7 | 100 |
| t_test.js | 4/4 | 100 |
| t_test_two_sample.js | 13/13 | 100 |
| unique_count_sorted.js | 7/7 | 100 |
| variance.js | 3/3 | 100 |
| wilcoxon_rank_sum.js | 29/30 | 96.66 |
| z_score.js | 1/1 | 100 |

## dev per-source statement coverage

| Source | Covered/total | % |
| --- | ---: | ---: |
| add_to_mean.js | 1/1 | 100 |
| approx_equal.js | 2/2 | 100 |
| bayesian_classifier.js | 29/29 | 100 |
| bernoulli_distribution.js | 3/3 | 100 |
| binomial_distribution.js | 12/12 | 100 |
| bisect.js | 11/11 | 100 |
| chi_squared_distribution_table.js | 1/1 | 100 |
| chi_squared_goodness_of_fit.js | 30/30 | 100 |
| chunk.js | 9/9 | 100 |
| ckmeans.js | 75/75 | 100 |
| coefficient_of_variation.js | 1/1 | 100 |
| combinations.js | 10/10 | 100 |
| combinations_replacement.js | 10/10 | 100 |
| combine_means.js | 1/1 | 100 |
| combine_variances.js | 2/2 | 100 |
| cumulative_std_logistic_probability.js | 1/1 | 100 |
| cumulative_std_normal_probability.js | 5/5 | 100 |
| epsilon.js | 1/1 | 100 |
| equal_interval_breaks.js | 11/11 | 100 |
| error_function.js | 5/5 | 100 |
| euclidean_distance.js | 6/6 | 100 |
| extent.js | 11/11 | 100 |
| extent_sorted.js | 1/1 | 100 |
| factorial.js | 9/9 | 100 |
| gamma.js | 11/11 | 100 |
| gammaln.js | 12/12 | 100 |
| geometric_mean.js | 9/9 | 100 |
| harmonic_mean.js | 9/9 | 100 |
| interquartile_range.js | 4/4 | 100 |
| inverse_error_function.js | 5/5 | 100 |
| k_means_cluster.js | 48/48 | 100 |
| kernel_density_estimation.js | 28/29 | 96.55 |
| linear_regression.js | 20/20 | 100 |
| linear_regression_line.js | 2/2 | 100 |
| log_average.js | 9/9 | 100 |
| logit.js | 3/3 | 100 |
| make_matrix.js | 9/9 | 100 |
| max.js | 8/8 | 100 |
| max_sorted.js | 1/1 | 100 |
| mean.js | 3/3 | 100 |
| mean_simple.js | 3/3 | 100 |
| median.js | 1/1 | 100 |
| median_absolute_deviation.js | 6/6 | 100 |
| median_sorted.js | 1/1 | 100 |
| min.js | 8/8 | 100 |
| min_sorted.js | 1/1 | 100 |
| mode.js | 1/1 | 100 |
| mode_fast.js | 15/15 | 100 |
| mode_sorted.js | 18/18 | 100 |
| numeric_sort.js | 2/2 | 100 |
| perceptron.js | 28/28 | 100 |
| permutation_test.js | 34/35 | 97.14 |
| permutations_heap.js | 20/20 | 100 |
| poisson_distribution.js | 12/12 | 100 |
| probit.js | 5/5 | 100 |
| product.js | 5/5 | 100 |
| quantile.js | 42/42 | 100 |
| quantile_rank.js | 2/2 | 100 |
| quantile_rank_sorted.js | 33/33 | 100 |
| quantile_sorted.js | 14/14 | 100 |
| quickselect.js | 39/39 | 100 |
| r_squared.js | 16/16 | 100 |
| relative_error.js | 2/3 | 66.66 |
| root_mean_square.js | 7/7 | 100 |
| sample.js | 2/2 | 100 |
| sample_correlation.js | 4/4 | 100 |
| sample_covariance.js | 12/12 | 100 |
| sample_kurtosis.js | 12/12 | 100 |
| sample_rank_correlation.js | 15/15 | 100 |
| sample_skewness.js | 15/15 | 100 |
| sample_standard_deviation.js | 2/2 | 100 |
| sample_variance.js | 5/5 | 100 |
| sample_with_replacement.js | 10/10 | 100 |
| shuffle.js | 2/2 | 100 |
| shuffle_in_place.js | 8/8 | 100 |
| sign.js | 7/7 | 100 |
| silhouette.js | 46/46 | 100 |
| silhouette_metric.js | 2/2 | 100 |
| standard_deviation.js | 4/4 | 100 |
| standard_normal_table.js | 12/12 | 100 |
| subtract_from_mean.js | 1/1 | 100 |
| sum.js | 16/16 | 100 |
| sum_nth_power_deviations.js | 9/9 | 100 |
| sum_simple.js | 7/7 | 100 |
| t_test.js | 4/4 | 100 |
| t_test_two_sample.js | 13/13 | 100 |
| unique_count_sorted.js | 7/7 | 100 |
| variance.js | 3/3 | 100 |
| wilcoxon_rank_sum.js | 30/30 | 100 |
| z_score.js | 1/1 | 100 |

llm covers 0 source files dev does not: none.
dev covers 3 source files llm does not: chi_squared_goodness_of_fit.js, logit.js, probit.js.
