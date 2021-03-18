// just snippets for documentation

fetch("https://rps.nasa.gov/system/protospace/public-M2020_new-MMRTG_4/lod_0_archive.bin").then( response => response.arrayBuffer()).then( b => buf = b)

getPLY = function (id) { 
  var meshplylzf = lod0archive[`mesh_${id}.ply.lzf`]; 
  return parsePLY(decompress(new Uint8Array(buf, meshplylzf.base_offset, meshplylzf.size)))
};

addGeo = function (node) { node.geometry.length > 0 ? node.geometry[0].parsed = getPLY(node.geometry[0].mesh_id) : console.log("nada") } 

doall = function (node) { addGeo(node); node.children.forEach ( c => doall(c) ) }

doall(hierarchy)
