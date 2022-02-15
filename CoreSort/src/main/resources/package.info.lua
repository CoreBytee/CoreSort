-- See https://github.com/Dot-lua/TypeWriter/wiki/package.info.lua-format for more info

return {

    InfoVersion = 1, -- Dont touch this

    ID = "coresort", -- A unique id 
    Version = "0.0.1", -- The package version

    Name = "CoreSort", -- The name of the project, can use spaces
    Description = "Web panel for my sorting system", -- Description

    Author = {
        Developers = {
            "CoreByte"
        },
        Contributors = {}
    },

    Dependencies = {
        Luvit = {
            "creationix/coro-http",
            "creationix/coro-websocket",
            "creationix/weblit"
        },
        Dua = {}
    },

    Contact = {
        Website = "", -- Homepage
        Source = "", -- Github repro
        Socials = {}
    },

    Entrypoints = {
        Main = "ga.corebyte.CoreSort.Boot"
    }

}
