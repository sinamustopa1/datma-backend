//require('dotenv').config({ path: '../.env' })
const axios = require('axios');
const qs = require('qs');

const DATA_URL =  "http://31.220.62.156:3030";
const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

module.exports.getMahasiswa = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?nama ?jk ?npm ?prodiName ?angkatanName ?keahlianName ?ttLahir ?agamaName ?email ?alamat ?noHP ?urlFoto
    WHERE{
        ?sub rdf:type data:mahasiswa
        OPTIONAL {?sub data:nama ?nama.}
        OPTIONAL {?sub data:jk ?jk.}
        OPTIONAL {?sub data:npm ?npm.}
        OPTIONAL {?sub data:onProdi ?prodiID.}
        OPTIONAL {?prodiID data:prodiName ?prodiName.}
        OPTIONAL {?sub data:onAngkatan ?angkatanID.}
        OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
        OPTIONAL {?sub data:onKeahlian ?keahlianID.}
        OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
        OPTIONAL {?sub data:ttLahir ?ttLahir.}
        OPTIONAL {?sub data:onAgama ?agamaID.}
        OPTIONAL {?agamaID data:agamaName ?agamaName.}
        OPTIONAL {?sub data:email ?email.}
        OPTIONAL {?sub data:alamat ?alamat.}
        OPTIONAL {?sub data:noHP ?noHP.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        FILTER regex(?nama, "${param.nama ? param.nama : ''}", "i")
        FILTER regex(?npm, "${param.npm ? param.npm : ''}", "i")
        FILTER regex(?prodiName, "${param.prodi ? param.prodi : ''}", "i")
        FILTER regex(?angkatanName, "${param.angkatan ? param.angkatan : ''}", "i")
        FILTER regex(?keahlianName, "${param.keahlian ? param.keahlian : ''}", "i")
        FILTER regex(?agamaName, "${param.agama ? param.agama : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/datma/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports.getSuggestion = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?nama ?jk ?npm ?prodiName ?angkatanName ?keahlianName ?ttLahir ?agamaName ?email ?alamat ?noHP ?urlFoto
    WHERE{
        ?sub rdf:type data:mahasiswa
        OPTIONAL {?sub data:nama ?nama.}
        OPTIONAL {?sub data:jk ?jk.}
        OPTIONAL {?sub data:npm ?npm.}
        OPTIONAL {?sub data:onProdi ?prodiID.}
        OPTIONAL {?prodiID data:prodiName ?prodiName.}
        OPTIONAL {?sub data:onAngkatan ?angkatanID.}
        OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
        OPTIONAL {?sub data:onKeahlian ?keahlianID.}
        OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
        OPTIONAL {?sub data:ttLahir ?ttLahir.}
        OPTIONAL {?sub data:onAgama ?agamaID.}
        OPTIONAL {?agamaID data:agamaName ?agamaName.}
        OPTIONAL {?sub data:email ?email.}
        OPTIONAL {?sub data:alamat ?alamat.}
        OPTIONAL {?sub data:noHP ?noHP.}
        OPTIONAL {?sub data:urlFoto ?urlFoto.}
        FILTER regex(?prodiName, "${param.prodi ? param.prodi : ''}", "i")
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/datma/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};

module.exports.getSearch = async(param)=>{
    // Query
    const queryData = {
    query: `PREFIX data:<http://example.com/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    SELECT ?nama ?jk ?npm ?prodiName ?angkatanName ?keahlianName ?ttLahir ?agamaName ?email ?alamat ?noHP ?urlFoto
    WHERE{
        {
            ?sub rdf:type data:mahasiswa
            OPTIONAL {?sub data:nama ?nama.}
            OPTIONAL {?sub data:jk ?jk.}
            OPTIONAL {?sub data:npm ?npm.}
            OPTIONAL {?sub data:onProdi ?prodiID.}
            OPTIONAL {?prodiID data:prodiName ?prodiName.}
            OPTIONAL {?sub data:onAngkatan ?angkatanID.}
            OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
            OPTIONAL {?sub data:onKeahlian ?keahlianID.}
            OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
            OPTIONAL {?sub data:ttLahir ?ttLahir.}
            OPTIONAL {?sub data:onAgama ?agamaID.}
            OPTIONAL {?agamaID data:agamaName ?agamaName.}
            OPTIONAL {?sub data:email ?email.}
            OPTIONAL {?sub data:alamat ?alamat.}
            OPTIONAL {?sub data:noHP ?noHP.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?nama, "${param.search ? param.search : ''}", "i")
        } UNION {
            ?sub rdf:type data:mahasiswa
            OPTIONAL {?sub data:nama ?nama.}
            OPTIONAL {?sub data:jk ?jk.}
            OPTIONAL {?sub data:npm ?npm.}
            OPTIONAL {?sub data:onProdi ?prodiID.}
            OPTIONAL {?prodiID data:prodiName ?prodiName.}
            OPTIONAL {?sub data:onAngkatan ?angkatanID.}
            OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
            OPTIONAL {?sub data:onKeahlian ?keahlianID.}
            OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
            OPTIONAL {?sub data:ttLahir ?ttLahir.}
            OPTIONAL {?sub data:onAgama ?agamaID.}
            OPTIONAL {?agamaID data:agamaName ?agamaName.}
            OPTIONAL {?sub data:email ?email.}
            OPTIONAL {?sub data:alamat ?alamat.}
            OPTIONAL {?sub data:noHP ?noHP.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?prodiName, "${param.search ? param.search : ''}", "i")
        } UNION {
            ?sub rdf:type data:mahasiswa
            OPTIONAL {?sub data:nama ?nama.}
            OPTIONAL {?sub data:jk ?jk.}
            OPTIONAL {?sub data:npm ?npm.}
            OPTIONAL {?sub data:onProdi ?prodiID.}
            OPTIONAL {?prodiID data:prodiName ?prodiName.}
            OPTIONAL {?sub data:onAngkatan ?angkatanID.}
            OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
            OPTIONAL {?sub data:onKeahlian ?keahlianID.}
            OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
            OPTIONAL {?sub data:ttLahir ?ttLahir.}
            OPTIONAL {?sub data:onAgama ?agamaID.}
            OPTIONAL {?agamaID data:agamaName ?agamaName.}
            OPTIONAL {?sub data:email ?email.}
            OPTIONAL {?sub data:alamat ?alamat.}
            OPTIONAL {?sub data:noHP ?noHP.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?angkatanName, "${param.search ? param.search : ''}", "i")
        } UNION {
            ?sub rdf:type data:mahasiswa
            OPTIONAL {?sub data:nama ?nama.}
            OPTIONAL {?sub data:jk ?jk.}
            OPTIONAL {?sub data:npm ?npm.}
            OPTIONAL {?sub data:onProdi ?prodiID.}
            OPTIONAL {?prodiID data:prodiName ?prodiName.}
            OPTIONAL {?sub data:onAngkatan ?angkatanID.}
            OPTIONAL {?angkatanID data:angkatanName ?angkatanName.}
            OPTIONAL {?sub data:onKeahlian ?keahlianID.}
            OPTIONAL {?keahlianID data:keahlianName ?keahlianName.}
            OPTIONAL {?sub data:ttLahir ?ttLahir.}
            OPTIONAL {?sub data:onAgama ?agamaID.}
            OPTIONAL {?agamaID data:agamaName ?agamaName.}
            OPTIONAL {?sub data:email ?email.}
            OPTIONAL {?sub data:alamat ?alamat.}
            OPTIONAL {?sub data:noHP ?noHP.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?keahlianName, "${param.search ? param.search : ''}", "i")
        }
    }`
    };
    try{
        const {data} = await axios(`${DATA_URL}/datma/query`,{
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        return data.results;
    }catch(err){
        res.status(400).json(err);
    }
};