initSidebarItems({"struct":[["AsJson",""],["AsPrettyJson",""],["Builder","A Builder consumes a json::Parser to create a generic Json structure."],["Decoder","A structure to decode JSON to values in rust."],["Encoder","A structure for implementing serialization to JSON."],["Parser","A streaming JSON parser implemented as an iterator of JsonEvent, consuming an iterator of char."],["PrettyJson",""],["Stack","A Stack represents the current position of the parser in the logical structure of the JSON stream. For example foo.bar[3].x"]],"type":[["Array",""],["BuilderError",""],["DecodeResult",""],["EncodeResult",""],["Object",""]],"enum":[["DecoderError",""],["EncoderError",""],["ErrorCode","The errors that can arise while parsing a JSON stream."],["Json","Represents a json value"],["JsonEvent","The output of the streaming parser."],["ParserError",""],["StackElement","StackElements compose a Stack. For example, Key(\"foo\"), Key(\"bar\"), Index(3) and Key(\"x\") are the StackElements compositing the stack that represents foo.bar[3].x"]],"fn":[["as_json","Create an `AsJson` wrapper which can be used to print a value as JSON on-the-fly via `write!`"],["as_pretty_json","Create an `AsPrettyJson` wrapper which can be used to print a value as JSON on-the-fly via `write!`"],["decode","Shortcut function to decode a JSON `&str` into an object"],["encode","Shortcut function to encode a `T` into a JSON `String`"],["error_str","Returns a readable error string for a given error code."]],"trait":[["ToJson","A trait for converting values to JSON"]]});