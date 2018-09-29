Python for Finance
===============================
![alt text](https://raw.githubusercontent.com/DragonflyStats/MA4128Assessment/master/images/python_for_finance.png)
###What is Python?
Python is an **interpreted**, **object-oriented**, high-level programming language with dynamic semantics. its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.
Python's simple, easy to learn syntax emphasizes **readability** and therefore reduces the **cost** of program maintenance.
Python supports modules and packages, which encourages program modularity and code reuse.
The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
Often, programmers fall in love with Python because of the increased productivity it provides. 
Since there is no compilation step, the edit-test-debug cycle is incredibly fast. Debugging Python programs is easy: a bug or bad input will never cause a segmentation fault. 
Instead, when the interpreter discovers an error, it raises an exception
When the program doesn't catch the exception, the interpreter prints a stack trace.
A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on.
The debugger is written in Python itself, testifying to Python's introspective power.
On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.
This pretty well describes why Python has evolved into one of the major programming languages as of today. 
Nowadays, Python is used by the beginner programmer as well as by the highly skilled expert developer, at schools, in universities, at web companies, in large corporations and financial institutions, as well as in any scientific field.
Among others, Python is characterized by the following features:

1. ___Open source___: Python and the majority of supporting libraries and tools available are open source and generally come with quite flexible and open licenses.
2. ___Interpreted___: The reference CPython implementation is an interpreter of the language that translates Python code at runtime to executable byte code.
3. ___Multiparadigm___: Python supports different programming and implementation paradigms, such as object orientation and imperative, functional, or procedural programming.
4. ___Multipurpose___: Python can be used for rapid, interactive code development as well as for building large applications; it can be used for low-level systems operations as well as for high-level analytics tasks.
5. ___Cross-platform___: Python is available for the most important operating systems, such as Windows, Linux, and Mac OS; it is used to build desktop as well as web applications; it can be used on the largest clusters and most powerful servers as well as on such small devices as the Raspberry Pi.
6. ___Dynamically typed___: Types in Python are in general inferred during runtime and not statically declared as in most compiled languages.
7. ___Indentation aware___: In contrast to the majority of other programming languages, Python uses indentation for marking code blocks instead of parentheses, brackets, or semicolons.
8. ___Garbage collecting___: Python has automated garbage collection, avoiding the need for the programmer to manage memory.

####Brief History of Python
Although Python might still have the appeal of something new to some people, it has been around for quite a long time.
In fact, development efforts began in the 1980s by Guido van Rossum from the Netherlands.
He is still active in Python development and has been awarded the title of Benevolent Dictator for Life by the Python community
The following can be considered milestones in the development of Python:

1. Python 0.9.0 released in **1991** (first release)

2. Python 1.0 released in **1994**
 
3. Python 2.0 released in **2000**

4. Python 2.6 released in **2008**

5. Python 2.7 released in **2010**

6. Python 3.0 released in **2008**

7. Python 3.3 released in **2010**

8. Python 3.4 released in **2014**

It is remarkable, and sometimes confusing to Python newcomers, that there are two major versions available, still being developed and, more importantly, in parallel use since 2008.
As of this writing, this will keep on for quite a while since neither is there 100% code compatibility between the versions, nor are all popular libraries available for Python 3.x.
The majority of code available and in production is still Python 2.6/2.7, and this book is based on the 2.7.x version, although the majority of code examples should work with versions 3.x as well.

####Technology in Finance

![alt text](http://www.turingfinance.com/wp-content/uploads/2015/04/Asset-Prices-Simulated-using-the-Heston-Stochastic-Volatility-Geometric-Brownian-Motion-Stochastic-Process-Heston.png)
In a sense, technology per se is nothing special to financial institutions (as compared, for instance, to industrial companies) or to the finance function (as compared to other corporate functions, like logistics).
However, in recent years, spurred by innovation and also regulation, banks and other financial institutions like hedge funds have evolved more and more into technology companies instead of being just financial intermediaries.
Technology has become a major asset for almost any financial institution around the globe, having the potential to lead to competitive advantages as well as disadvantages.
Some background information can shed light on the reasons for this development.

#####Technology Spending
Banks and financial institutions together form the industry that spends the most on technology on an annual basis. 
The following statement therefore shows not only that technology is important for the financial industry, but that the financial industry is also really important to the technology sector:

 *Banks will spend 4.2% more on technology in 2014 than they did in 2013, according to IDC analysts. Overall IT spend in financial services globally will exceed $430 billion in 2014 and surpass $500 billion by 2020*, the analysts say.
 
Large, multinational banks today generally employ thousands of developers that maintain existing systems and build new ones.
Large investment banks with heavy technological requirements show technology budgets often of several billion USD per year.

#####Technology as Enabler
The technological development has also contributed to innovations and efficiency improvements in the financial sector:

  *Technological innovations have contributed significantly to greater efficiency in the derivatives market. Through innovations in trading technology, trades at Eurex are today executed much faster than ten years ago despite the strong increase in trading volume and the number of quotes … These strong improvements have only been possible due to the constant, high IT investments by derivatives exchanges and clearing houses.*
  
As a side effect of the increasing efficiency, competitive advantages must often be looked for in ever more complex products or transactions.
This in turn inherently increases risks and makes risk management as well as oversight and regulation more and more difficult.
The financial crisis of 2007 and 2008 tells the story of potential dangers resulting from such developments.
In a similar vein, “algorithms and computers gone wild” also represent a potential risk to the financial markets; this materialized dramatically in the so-called flash crash of May 2010, where automated selling led to large intraday drops in certain stocks and stock indices.

[Reference](https://www.safaribooksonline.com/library/view/python-for-finance/9781491945360/ch01.html)
# Some Random Code Here
</code></pre>
**item 1** 
```
chain = zeros(1,chain_length);
chain(1)=starting_value;
for i=2:chain_length
this_step_distribution = transition_probabilities(chain(i-1),:);
cumulative_distribution = cumsum(this_step_distribution);
r = rand();
chain(i) = find(cumulative_distribution>r,1);
end
%  provides chain = 1 2 1 2 1 2 1 2 1 1 2 1 2 1 2....
```


**item 2** 
```
% geometric_brownian(N,r,alpha,T) simulates a geometric Brownian motion 
% on [0,T] using N normally distributed steps and parameters r and alpha

function [X] = geometric_brownian(N,r,alpha,T)

t = (0:1:N)'/N;                   % t is the column vector [0 1/N 2/N ... 1]

W = [0; cumsum(randn(N,1))]/sqrt(N); % S is running sum of N(0,1/N) variables

t = t*T;
W = W*sqrt(T);

Y = (r-(alpha^2)/2)*t + alpha * W;

X = exp(Y);

plot(t,X);          % plot the path
hold on
plot(t,exp(r*t),':');
axis([0 T 0 max(1,exp((r-(alpha^2)/2)*T+2*alpha))])
title([int2str(N) '-step geometric Brownian motion and its mean'])
xlabel(['r = ' num2str(r) ' and alpha = ' num2str(alpha)])
hold off
```

 ```python
s = "Python syntax highlighting"
print s
```

**item 3** - fizzbuzztest. 
```
def fizzbuzz(start, end):
    def int_to_fizzbuzz(i):
        entry = ''
        if i%3 == 0:
            entry += "fizz"
        if i%5 == 0:
            entry += "buzz"
        if i%3 != 0 and i%5 != 0:
            entry = i
        return entry

    return [int_to_fizzbuzz(i) for i in range(start, end+1)]

if __name__ == "__main__":
    start = int(input("Start Value:"))
    end = int(input("End Value:"))
    for i in fizzbuzz(start, end):
        print(i)
```


1. This is in *italics*
2. This is in **bold**
3. This is in both ***bold and ialics***




