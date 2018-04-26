xts
==============
## Description
This function is used internally in the subsetting mechanism of `xts`. The function is unexported,
though documented for use with `xts` subsetting.
## Details
This function replicates most of the ISO standard for expressing time and time-based ranges in a
universally accepted way.
The basic idea is to create the endpoints of a range, given a string representation. These endpoints
are aligned in `POSIXct` time to the zero second of the day at the beginning, and the 59.9999th
second of the 59th minute of the 23rd hour of the final day.
For dates prior to the epoch (1970-01-01) the ending time is aligned to the 59.0000 second. This is
due to a bug/feature in the R implementation of `asPOSIXct` and `mktime0` at the C-source level. This
limits the precision of ranges prior to 1970 to 1 minute granularity with the current xts workaround.
Recurring times over multiple days may be specified using the T notation. 
##Example
```
# Not run:
library(xts)
data(sample_matrix)
sample.xts <- as.xts(sample_matrix)
events <- xts(letters[1:3],
as.Date(c("2007-01-12", "2007-04-22", "2007-06-13")))
plot(sample.xts[,4])
addEventLines(events, srt=90, pos=2)
# End(Not run)
```
![Plot1](https://github.com/ULStats/MA4128Assessment-2018/blob/master/Plot1.png)
# dplyr
## Description
dplyr provides a flexible grammar of data manipulation. It’s the next iteration of `plyr`, focused on
tools for working with data frames (hence the d in the name).
Details
It has three main goals:
* Identify the most important data manipulation verbs and make them easy to use from R.
* Provide blazing fast performance for in-memory data by writing key pieces in C++ (using
Rcpp)
* Use the same interface to work with data no matter where it’s stored, whether in a data frame,
a data table or database
## Example
```
scramble <- function(x) x[sample(nrow(x)), sample(ncol(x))]
# By default, ordering of rows and columns ignored
all_equal(mtcars, scramble(mtcars))
# But those can be overriden if desired
all_equal(mtcars, scramble(mtcars), ignore_col_order = FALSE)
all_equal(mtcars, scramble(mtcars), ignore_row_order = FALSE)
# By default all_equal is sensitive to variable differences
df1 <- data.frame(x = "a")
df2 <- data.frame(x = factor("a"))
all_equal(df1, df2)
# But you can request dplyr convert similar types
all_equal(df1, df2, convert = TRUE)
```
## Results of Code
```
> all_equal(mtcars, scramble(mtcars))
[1] TRUE
> all_equal(mtcars, scramble(mtcars), ignore_col_order = FALSE)
[1] "Same column names, but different order"
> all_equal(mtcars, scramble(mtcars), ignore_row_order = FALSE)
[1] "Same row values, but different order"
> df1 <- data.frame(x = "a")
> df2 <- data.frame(x = factor("a"))
> all_equal(df1, df2)
[1] TRUE
> # But you can request dplyr convert similar types
> all_equal(df1, df2, convert = TRUE)
[1] TRUE
> all_equal(df1, df2, convert = TRUE)
[1] TRUE
```
## References
*https://cran.r-project.org/web/packages/xts/xts.pdf

*https://cran.r-project.org/web/packages/dplyr/dplyr.pdf
