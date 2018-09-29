Python for Finance
=====================
![alttext](https://github.com/DragonflyStats/MA4128Assessment/blob/master/python_for_finance.png)

### *What is Python?*
Python is a high-level, multipurpose programming language that is used in a wide range of
domains and technical fields. Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its highlevel built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components
together. Python’s simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program
maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The
Python interpreter and the extensive standard library are available in source or binary form without charge for all
major platforms, and can be freely distributed.
This pretty well describes why Python has evolved into one of the major programming
languages as of today. Nowadays, Python is used by the beginner programmer as well as
by the highly skilled expert developer, at schools, in universities, at web companies, in
large corporations and financial institutions, as well as in any scientific field.
Among others, Python is characterized by the following features:

1. **Open source**
:Python and the majority of supporting libraries and tools available are open source
and generally come with quite flexible and open licenses.

2. **Interpreted**
:The reference CPython implementation is an interpreter of the language that
translates Python code at runtime to executable byte code.

3. **Multiparadigm**
:Python supports different programming and implementation paradigms, such as
object orientation and imperative, functional, or procedural programming.

4. **Multipurpose**
:Python can be used for rapid, interactive code development as well as for building
large applications; it can be used for low-level systems operations as well as for highlevel
analytics tasks.

5. **Cross-platform**
:Python is available for the most important operating systems, such as Windows,
Linux, and Mac OS; it is used to build desktop as well as web applications; it can be
used on the largest clusters and most powerful servers as well as on such small
devices as the Raspberry Pi.

6. **Dynamically typed**
:Types in Python are in general inferred during runtime and not statically declared as
in most compiled languages.

7. **Indentation aware**
:In contrast to the majority of other programming languages, Python uses indentation
for marking code blocks instead of parentheses, brackets, or semicolons.

8. **Garbage collecting**
:Python has automated garbage collection, avoiding the need for the programmer to manage memory.

### *Technology in Finance*
Now that we have some rough ideas of what Python is all about, it makes sense to step back a bit and to briefly contemplate the role of technology in finance. This will put us in a position to better judge the role Python already plays and, even more importantly, will probably play in the financial industry of the future.

In a sense, technology per se is nothing special to financial institutions (as compared, for instance, to industrial companies) or to the finance function (as compared to other corporate functions, like logistics). However, in recent years, spurred by innovation and also regulation, banks and other financial institutions like hedge funds have evolved more and more into technology companies instead of being just financial intermediaries. Technology has become a major asset for almost any financial institution around the globe, having the potential to lead to competitive advantages as well as disadvantages.

**Aspects of Technology in Finance:**
- Costs for technology in the finance industry
- Technology as an enabler for new business and innovation
- Technology and talent as barriers to entry in the finance industry
- Increasing speeds, frequencies, and data volumes
- The rise of real-time analytics

### ***Sample Code***
 
**Sample 1:** *Opening Files*
<pre> <code> # indent your Python code to put into an email
import glob
 # glob supports Unix style pathname extensions
python_files = glob.glob('*.py')
for file_name in sorted(python_files):
    print '    ------' + file_name

    with open(file_name) as f:
        for line in f:
            print '    ' + line.rstrip()

    print </code> </pre> 
  
  **Sample 2:** *Unit testing with unittest*
<pre> <code> import unittest
def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[(size - 1) / 2]
    else:
        return (copy[size/2 - 1] + copy[size/2]) / 2
class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.failUnlessEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)
# if __name__ == '__main__':
    unittest.main() </code> </pre> 

### **Conclusion**
Python as a language—but much more so as an ecosystem—is an ideal technological framework for the financial industry. It is characterized by a number of benefits, like an elegant syntax, efficient development approaches, and usability for prototyping and production, among others. With its huge amount of available libraries and tools, Python seems to have answers to most questions raised by recent developments in the financial industry in terms of analytics, data volumes and frequency, compliance, and regulation, as well as technology itself. It has the potential to provide a single, powerful, consistent framework with which to streamline end-to-end development and production efforts even across larger financial institutions.

[Pyhton Information Reference](https://www.safaribooksonline.com/library/view/python-for-finance/9781491945360/ch01.html)

[Code Reference](https://wiki.python.org/moin/SimplePrograms)
