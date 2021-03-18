# A detailed model extracted from https://rps.nasa.gov/resources/3D-viewer/

There is a hierarchy json which has the transformation hierarchy, names and colors.

The geometry is in a binary file which contains lzf compressed PLY format, just packed in one file, lod0_archive.bin.

The meshes are indexed in lod0_archive.json, by offset and length.

It was possible to decompress using the included lzf.js, and the parse the PLY meshes with the included ParsePLY.js. It returns object with vertex, index and normal data.

The parsed data was then added to the existing hierarchy.json, in the geometry[0] objects, as an additional "parsed" property.

This should make it possible to convert the hierarchy to other formats.
