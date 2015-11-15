initSidebarItems({"enum":[["CmdType","This type contains a numerical u8 representation of every command/action possible in a CoH2 command sequence. Contents of this enum provided by Relic Entertainment."],["Error","This type contains the various error messages that can be returned from the library."]],"fn":[["free_cstring","Extern function for deallocating a CString returned by parse_to_cstring."],["parse_to_cstring","Extern function for invoking a parse operation across FFI. Returns a Vault type serialized to JSON."],["print_version","Prints out the current vault version and compatible CoH2 game versions."]],"struct":[["ChatLine","This type represents a single Company of Heroes 2 chat message."],["Command","This type represents a single Company of Heroes 2 player command."],["Config","This type contains option and configuration information for the associated Vault instance."],["Item","This type contains a parsed representation of an item that can be equipped in a CoH2 replay."],["Map","This type represents a Company of Heroes 2 map as presented in a CoH2 replay file."],["Player","This type represents a Company of Heroes 2 player entity as it appears in a CoH2 replay file."],["Replay","The main Replay type, contains all currently parsed replay data. Can be serialized to JSON for output using rustc_serialize."],["Vault","This type is the main entry point for the vault replay parser and provides the cleanest interface for use by external code."]],"type":[["Result","Custom Result wrapper for vault, used to return vault::Error from every result."]]});