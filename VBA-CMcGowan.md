Visual Basic for Applications
=============================

**Introduction**

This essay will look at how VBA can be used in conjuction with Excel to make a powerful tool for problem solving and analytics in data.

From some research, looking at job boards etc., it is clear that exposure to VBA is something that employers find very attractive.

Visual Basic for Applications (VBA) is an implementation of Microsoft's discontinued event-driven programming language, Visual Basic 6, and its associated integrated development environment (IDE).

VBA is a powerful and time-saving tool for automating processes which could take hours to manually process. It is for this reason why employers look to it so favourably.

![alt text](http://excelvbalover.com/wp-content/themes/excelvbalover/images/vba-logo.png "VBA Logo")

The application most used in conjunction with VBA is Microsoft Excel.

**What is VBA for Excel?**

Visual Basic for Applications enables building user-defined functions (UDFs), automating processes and accessing Windows API and other low-level functionality through dynamic-link libraries (DLLs). 

It supersedes and expands on the abilities of earlier application-specific macro programming languages such as Word's WordBasic. 

It can be used to control many aspects of the host application, including manipulating user interface features, such as menus and toolbars, and working with custom user forms or dialog boxes.

VBA works by running macros, step-by-step procedures written in Visual Basic. Many users find that learning even a small amount of VBA code makes their work easier and gives them the ability to do things in Office that they did not think were possible. Once you have learned some VBA, it becomes much easier to learn a whole lot more—so the possibilities here are limitless.

**VBA as both a complier and an interpreter**

Traditional compiled languages, such as C, compile human-readable source code into machine-readable, and much faster, object code. These object programs then need to be linked into an executable file to be used. Syntax errors are not generally located until the code is completely compiled. (Parsing compilers are an exception.) 

Traditional interpreted languages, such as QBasic, use interpreters that read each line of code and translate it into computer instructions as you write it. An advantage of this method is that an interpreter can test your code as you write it. In some cases this line-by-line interpretation can be slow. 

Visual Basic incorporates elements of both compiled and interpreted languages. Visual Basic does interpret each line of code as you write it, but Microsoft Access performs this interpretation in the background, and does not exhibit any performance degradation because of this interpretation.

**The Visual Basic Editor in Excel (VBE)**

When you want Excel to do some work for you, you open the Visual Basic Editor and you write the instructions in the VBA language that Excel understands.

You develop, test and modify VBA procedures (macros) in the Excel Visual Basic Editor (VBE). It is a very user-friendly development environment. VBA procedures developed in the VBE become part of the workbook in which they are developed and when the workbook is saved the VBA components are saved at the same time. So, when you send the workbook to the "Recycling Bin" the VBA procedures (macros) are destroyed.

**VBA in Use**

The VBA language has many different features to carry out the tasks required for completion. Here is a list of some of the capabilities of the VBA language:

- Conditional Logic
- Strings and String Functions
- Programming Loops
- Programming Arrays
- Subs and Functions

**Examples of VBA Code**

<pre><code>
ActiveCell.Font.Bold = True
</pre></code>
This line tells Excel to change the bold property of the active cell to true. This turns the active cell **bold** if it is not already bold, and does nothing if it is already bold.

<pre><code>
Dim Variable1 As Integer
If Variable1 = 50 Then
MsgBox "Number = 50"
End If
</pre></code>
Here, an interger variable called Variable1 is created. An if statement is then used. If the integer variable is equal to 50, then a dialog box will appear with the message "Number = 50", otherwise nothing will happen.
This is an example of using conditional logic in VBA.

<pre><code>
Sub Loop1()
  Dim Number1 As Integer
  Dim EndNumber As Integer
  Dim Answer As Integer
  
  EndNumber = 10
  
  For Number1 To EndNumber
    Answer = Answer + Number1
  
  Next Number1
  
  MsgBox Answer
  
End Sub
</pre></code>

This code is an example of a loop. The Answer variable is undated according to the algorithm. The loop begins from Number1 and continues until it reaches a closing condition or in this case until the ending number, EndNumber. At the end of the loop, a message box will appear to display the answer.

**Getting Started**

The first stage in accessing the VBA editor in Excel is turning on the developer tab in Excel. To do this, you can follow the following five steps:

1. On the File tab, choose Options to open the Excel Options dialog box.
2. Click Customize Ribbon on the left side of the dialog box.
3. Under Choose commands from on the left side of the dialog box, select Popular Commands.
4. Under Customize the ribbon on the right side of the dialog box, select Main tabs, and then select the Developer check box.
5. Click OK.

**Learning to use VBA**

Once you have the developer tab set up in Excel, you are on track to using the VBA language. There are a wide range of free training websites that will teach the basics. Also, resources such as stackexchange can enhance further development of the nuances of the language.

**Conclusion**

VBA is a powerful tool to be used in conjuction with applications such as Microsoft Excel. It is a straightforward language to learn, with a lot of helpful resources available for it online. It is also beneficial because most users will have access to a program in which to use it without the need for any additional downloads.

Currently, an upward trend in being observed in the number of employers looking for people who have experience with VBA. For this reason, along with its practicality and other benefits, it is a much-recommended language to learn.


**References**
-https://support.microsoft.com/en-us/kb/109382

-http://www.excel-pratique.com/en/vba.php

-https://msdn.microsoft.com/en-us/library/office/ee814737(v=office.14).aspx#odc_Office14_ta_GettingStartedWithVBAInExcel2010_WhyUseVBAInExcel2010

-http://www.tutorialspoint.com/vba/


