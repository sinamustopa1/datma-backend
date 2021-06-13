module.exports = fn = data => {
    return {
        "nama": data.nama ? data.nama.value : '',
        "jk": data.jk ? data.jk.value : '',
        "npm": data.npm ? data.npm.value : '',
        "prodi": data.prodiName ? data.prodiName.value : '',
        "angkatan": data.angkatanName ? data.angkatanName.value : '',
        "keahlian": data.keahlianName ? data.keahlianName.value : '',
        "ttLahir": data.ttLahir ? data.ttLahir.value : '',
        "agama": data.agamaName ? data.agamaName.value : '',
        "email": data.email ? data.email.value : '',
        "alamat": data.alamat ? data.alamat.value : '',
        "noHP": data.noHP ? data.noHP.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}