var searchIndex = {};
searchIndex['phf_generator'] = {"items":[[0,"","phf_generator","",null,null],[3,"HashState","","",null,null],[12,"key","","",0,null],[12,"disps","","",0,null],[12,"map","","",0,null],[5,"generate_hash","","",null,null]],"paths":[[3,"HashState"]]};
searchIndex['phf_codegen'] = {"items":[[0,"","phf_codegen","A set of builders to generate Rust source for PHF data structures at\ncompile time.",null,null],[3,"Map","","A builder for the `phf::Map` type.",null,null],[3,"Set","","A builder for the `phf::Set` type.",null,null],[3,"OrderedMap","","A builder for the `phf::OrderedMap` type.",null,null],[3,"OrderedSet","","A builder for the `phf::OrderedSet` type.",null,null],[11,"new","","Creates a new `phf::Map` builder.",0,{"inputs":[{"name":"map"}],"output":{"name":"map"}}],[11,"entry","","Adds an entry to the builder.",0,{"inputs":[{"name":"map"},{"name":"k"},{"name":"str"}],"output":{"name":"map"}}],[11,"build","","Constructs a `phf::Map`, outputting Rust source to the provided writer.",0,{"inputs":[{"name":"map"},{"name":"w"}],"output":{"name":"result"}}],[11,"new","","Constructs a new `phf::Set` builder.",1,{"inputs":[{"name":"set"}],"output":{"name":"set"}}],[11,"entry","","Adds an entry to the builder.",1,{"inputs":[{"name":"set"},{"name":"t"}],"output":{"name":"set"}}],[11,"build","","Constructs a `phf::Set`, outputting Rust source to the provided writer.",1,{"inputs":[{"name":"set"},{"name":"w"}],"output":{"name":"result"}}],[11,"new","","Constructs a enw `phf::OrderedMap` builder.",2,{"inputs":[{"name":"orderedmap"}],"output":{"name":"orderedmap"}}],[11,"entry","","Adds an entry to the builder.",2,{"inputs":[{"name":"orderedmap"},{"name":"k"},{"name":"str"}],"output":{"name":"orderedmap"}}],[11,"build","","Constructs a `phf::OrderedMap`, outputting Rust source to the provided\nwriter.",2,{"inputs":[{"name":"orderedmap"},{"name":"w"}],"output":{"name":"result"}}],[11,"new","","Constructs a new `phf::OrderedSet` builder.",3,{"inputs":[{"name":"orderedset"}],"output":{"name":"orderedset"}}],[11,"entry","","Adds an entry to the builder.",3,{"inputs":[{"name":"orderedset"},{"name":"t"}],"output":{"name":"orderedset"}}],[11,"build","","Constructs a `phf::OrderedSet`, outputting Rust source to the provided\nwriter.",3,{"inputs":[{"name":"orderedset"},{"name":"w"}],"output":{"name":"result"}}]],"paths":[[3,"Map"],[3,"Set"],[3,"OrderedMap"],[3,"OrderedSet"]]};
searchIndex['phf'] = {"items":[[0,"","phf","Compile time optimized maps and sets.",null,null],[8,"PhfHash","","A trait implemented by types which can be used in PHF data structures",null,null],[10,"phf_hash","","Hashes the value of `self`, factoring in a seed",0,null],[3,"Map","","An immutable map constructed at compile time.",null,null],[3,"Set","","An immutable set constructed at compile time.",null,null],[3,"OrderedMap","","An order-preserving immutable map constructed at compile time.",null,null],[3,"OrderedSet","","An order-preserving immutable set constructed at compile time.",null,null],[0,"map","","An immutable map constructed at compile time.",null,null],[3,"Map","phf::map","An immutable map constructed at compile time.",null,null],[3,"Entries","","An iterator over the key/value pairs in a `Map`.",null,null],[3,"Keys","","An iterator over the keys in a `Map`.",null,null],[3,"Values","","An iterator over the values in a `Map`.",null,null],[11,"fmt","","",1,{"inputs":[{"name":"map"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Output","","",null,null],[11,"index","","",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"v"}}],[11,"is_empty","","Returns true if the `Map` is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"bool"}}],[11,"len","","Returns the number of entries in the `Map`.",1,{"inputs":[{"name":"map"}],"output":{"name":"usize"}}],[11,"contains_key","","Determines if `key` is in the `Map`.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"bool"}}],[11,"get","","Returns a reference to the value that `key` maps to.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_entry","","Like `get`, but returns both the key and the value.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"entries","","Returns an iterator over the key/value pairs in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"entries"}}],[11,"keys","","Returns an iterator over the keys in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator over the values in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"values"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",4,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[0,"set","phf","An immutable set constructed at compile time.",null,null],[3,"Set","phf::set","An immutable set constructed at compile time.",null,null],[3,"Iter","","An iterator over the values in a `Set`.",null,null],[11,"fmt","","",5,{"inputs":[{"name":"set"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","Returns the number of elements in the `Set`.",5,{"inputs":[{"name":"set"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `Set` contains no elements.",5,{"inputs":[{"name":"set"}],"output":{"name":"bool"}}],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",5,{"inputs":[{"name":"set"},{"name":"u"}],"output":{"name":"option"}}],[11,"contains","","Returns true if `value` is in the `Set`.",5,{"inputs":[{"name":"set"},{"name":"u"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the values in the set.",5,{"inputs":[{"name":"set"}],"output":{"name":"iter"}}],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"is_subset","","Returns true if `other` contains all values in `self`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"is_superset","","Returns true if `self` contains all values in `other`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[11,"next","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[0,"ordered_map","phf","An order-preserving immutable map constructed at compile time.",null,null],[3,"OrderedMap","phf::ordered_map","An order-preserving immutable map constructed at compile time.",null,null],[3,"Entries","","An iterator over the entries in a `OrderedMap`.",null,null],[3,"Keys","","An iterator over the keys in a `OrderedMap`.",null,null],[3,"Values","","An iterator over the values in a `OrderedMap`.",null,null],[11,"fmt","","",7,{"inputs":[{"name":"orderedmap"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Output","","",null,null],[11,"index","","",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"v"}}],[11,"len","","Returns the number of entries in the `Map`.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `Map` is empty.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"bool"}}],[11,"get","","Returns a reference to the value that `key` maps to.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"contains_key","","Determines if `key` is in the `Map`.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"bool"}}],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered map.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_entry","","Like `get`, but returns both the key and the value.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"entries","","Returns an iterator over the key/value pairs in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"entries"}}],[11,"keys","","Returns an iterator over the keys in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator over the values in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"values"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[11,"next","","",8,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"next_back","","",8,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"indexable","","",8,{"inputs":[{"name":"entries"}],"output":{"name":"usize"}}],[11,"idx","","",8,{"inputs":[{"name":"entries"},{"name":"usize"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",9,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"next_back","","",9,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"indexable","","",9,{"inputs":[{"name":"keys"}],"output":{"name":"usize"}}],[11,"idx","","",9,{"inputs":[{"name":"keys"},{"name":"usize"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",10,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"next_back","","",10,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"indexable","","",10,{"inputs":[{"name":"values"}],"output":{"name":"usize"}}],[11,"idx","","",10,{"inputs":[{"name":"values"},{"name":"usize"}],"output":{"name":"option"}}],[0,"ordered_set","phf","An order-preserving immutable set constructed at compile time.",null,null],[3,"OrderedSet","phf::ordered_set","An order-preserving immutable set constructed at compile time.",null,null],[3,"Iter","","An iterator over the values in a `OrderedSet`.",null,null],[11,"fmt","","",11,{"inputs":[{"name":"orderedset"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","Returns the number of elements in the `OrderedSet`.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `OrderedSet` contains no elements.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"option"}}],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered set.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"option"}}],[11,"contains","","Returns true if `value` is in the `Set`.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the values in the set.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"iter"}}],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"is_subset","","Returns true if `other` contains all values in `self`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"is_superset","","Returns true if `self` contains all values in `other`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[11,"next","","",12,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"next_back","","",12,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"indexable","","",12,{"inputs":[{"name":"iter"}],"output":{"name":"usize"}}],[11,"idx","","",12,{"inputs":[{"name":"iter"},{"name":"usize"}],"output":{"name":"option"}}]],"paths":[[8,"PhfHash"],[3,"Map"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"Set"],[3,"Iter"],[3,"OrderedMap"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"OrderedSet"],[3,"Iter"]]};
searchIndex['phf_macros'] = {"items":[[0,"","phf_macros","Compiler plugin defining macros that create PHF data structures.",null,null],[0,"util","","",null,null],[3,"Entry","phf_macros::util","",null,null],[12,"key_contents","","",0,null],[12,"key","","",0,null],[12,"value","","",0,null],[4,"Key","","",null,null],[13,"Str","","",1,null],[13,"Binary","","",1,null],[13,"Char","","",1,null],[13,"U8","","",1,null],[13,"I8","","",1,null],[13,"U16","","",1,null],[13,"I16","","",1,null],[13,"U32","","",1,null],[13,"I32","","",1,null],[13,"U64","","",1,null],[13,"I64","","",1,null],[13,"Bool","","",1,null],[5,"create_map","","",null,{"inputs":[{"name":"extctxt"},{"name":"span"},{"name":"vec"},{"name":"hashstate"}],"output":{"name":"box"}}],[5,"create_set","","",null,{"inputs":[{"name":"extctxt"},{"name":"span"},{"name":"vec"},{"name":"hashstate"}],"output":{"name":"box"}}],[5,"create_ordered_map","","",null,{"inputs":[{"name":"extctxt"},{"name":"span"},{"name":"vec"},{"name":"hashstate"}],"output":{"name":"box"}}],[5,"create_ordered_set","","",null,{"inputs":[{"name":"extctxt"},{"name":"span"},{"name":"vec"},{"name":"hashstate"}],"output":{"name":"box"}}],[11,"clone","","",1,{"inputs":[{"name":"key"}],"output":{"name":"key"}}],[11,"eq","","",1,{"inputs":[{"name":"key"},{"name":"key"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"key"},{"name":"key"}],"output":{"name":"bool"}}],[11,"hash","","",1,{"inputs":[{"name":"key"},{"name":"s"}],"output":null}],[11,"phf_hash","","",1,null],[11,"phf_hash","","",0,null],[14,"phf_map!","phf_macros","Constructs a `phf::Map` at compile time.",null,null],[14,"phf_set!","","Constructs a `phf::Set` at compile time.",null,null],[14,"phf_ordered_map!","","Constructs a `phf::OrderedMap` at compile time.",null,null],[14,"phf_ordered_set!","","Constructs a `phf::OrderedSet` at compile time.",null,null]],"paths":[[3,"Entry"],[4,"Key"]]};
searchIndex['phf_shared'] = {"items":[[0,"","phf_shared","",null,null],[5,"displace","","",null,{"inputs":[{"name":"u32"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"u32"}}],[8,"PhfHash","","A trait implemented by types which can be used in PHF data structures",null,null],[10,"phf_hash","","Hashes the value of `self`, factoring in a seed",0,null]],"paths":[[8,"PhfHash"]]};
initSearch(searchIndex);
