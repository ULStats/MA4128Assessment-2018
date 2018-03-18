Julia Language
============================================
# Noeleen Rawle 17071844
## Calling C and Fortran Code

There are many high-quality, mature libraries other than Julia for numerical computing already written in C and Fortran.
Julia makes it simple and efficient to call C and Fortran functions, to allow easy use.
This means that fuunctions can be called directly from Julia without any "glue" code, code compilation, or generation-even from the interactive prompt.
This is accomplished by simply making the appropriate call with 'ccall' syntax, which looks like an ordinary function call.
