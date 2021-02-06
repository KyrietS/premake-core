Returns the drive letter portion of a path, if present.

```lua
p = path.getdrive("path")
```

### Parameters ###

`path` is the file system path to be split.


### Return Value ###

The drive letter portion of the path, if one is specified. Otherwise, nil.


### Availability ###

Premake 4.0 or later.


### See Also ###

* [path.getbasename](path.getbasename)
* [path.getdirectory](path.getdirectory)
* [path.extension](path.getextension)
* [path.getname](path.getname)
