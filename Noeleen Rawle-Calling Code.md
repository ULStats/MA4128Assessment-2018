![Alt text](https://www.wilmott.com/wp-content/uploads/2017/02/jcl-logo-e1487133902152.png)
============================================
# Noeleen Rawle 17071844
## Calling C and Fortran Code

There are many high-quality, mature libraries other than Julia for numerical computing already written in C and Fortran.
Julia makes it simple and efficient to call C and Fortran functions, to allow easy use.
This means that functions can be called directly from Julia without any "glue" code, code compilation, or generation-even from the interactive prompt.
This is accomplished by simply making the appropriate call with `ccall` syntax, which looks like an ordinary function call.

The code to be called must be part of a shared library.
Most of the libraries in C and Fortran ship as compiled libraries already, but if you are compiling the code yourself you will need to use the `-shared` and the `fPIC` options.

Shared libraries and functions are referenced by a tuple of the form (`:function`, "`library`") or ("`function`", "`library`") where `function` is the C-exported function name.
`library` refers to the shared library name.
A function may be used alone in the place of a tuple.
This form may be used to call C library functions, functions in the Julia runtime, or functions in an application linked to Julia.

Fortran compilers, by default **generate mangled names**, and so to call a Fortran function via `ccall` you must pass the mangled identifier corresponding to the rule followed by your Fortran compiler.

Finally, you can use `ccall` to generate a call to the library function.
Arguments to `ccall` are as follows:

* A (`:function`, "`library`") pair, which must be written as a literal constant, OR a function pointer.
* Return type
    * This argument will be evaluated when the containing method is defined, at the compile-time.
* A tuple of input values. The input types must be written as a literal tuple, not a tuple-valued variable or expression.
    * This argument will be evaluated when the containing method is defined, at the compile-time.
* The following arguments, if there are any are the actual argument values passed to the function.

The following simple example calls the `clock` function from the standard C library:
```julia
julia> t = ccall((:clock, "libc"), Int32, ())
2292761

julia> t
2292761

julia> typeof(ans)
Int32
```
`clock` takes no arguments and returns `int32`.

In practice, particularly when providing reusable functions, one tends to wrap `ccall` uses in Julia functions that sets up the arguments. 
It then checks for errors in whatever format the C or Fortran function indicates them.
It then propagates the errors to Julia as exceptions.
This is particularly important because C and Fortran APIs are incredibly inconsistent with how they indicate error conditions.
For example, the `getenv` C library is wrapped in a Julia function as shown. 
The Julia function is a simplified version of the actual definition from `env.jl`:
```julia
function getenv(var::AbstractString)
    val = ccall((:getenv, "libc"),
                Cstring, (Cstring,), var)
    if val == C_NULL
        error("getenv: undefined variable: ", var)
    end
    unsafe_string(val)
end
```

When converting to a `Cstring` as part of the `ccall` function checks for contained NULL bytes and could therefore show a conversion error.
