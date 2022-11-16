const params = new URLSearchParams(location.search);
const departmentName = params.get('name');
const $ = element => document.getElementById(element);

const imprimirDatos = (container, datos) => {
    const ul = document.createElement('ul');
    datos.forEach(dato => {
        const li = document.createElement('li');
        li.textContent = dato;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
const imprimirNoDatos = (container, prop) => {
    const span = document.createElement('span');
    span.textContent = `No existen ${prop} para este departamento`;
    container.appendChild(span);
}

if (!departmentName) {
    window.location = 'index.html'
}
else {
    const divDatos = $('datos');
    const divMunicipios = $('municipios');
    const divTurismo = $('turismo');
    const divRios = $('rios');
    const divLagos = $('lagos');
    const divCerros = $('cerros');
    const divPersonajes = $('personajes');
    const divBandas = $('bandas');
    const imgMunicipio = $('imgMunicipios');
    const imgBanner = $('imgBanner');
    const departmentObject =
        departmentName === 'ahuachapan' ? ahuachapan :
            (departmentName === 'cabanias' ? cabanias :
                (departmentName === 'chalatenango' ? chalatenango :
                    (departmentName === 'cuscatlan' ? cuscatlan :
                        (departmentName === 'la-libertad' ? laLibertad :
                            (departmentName === 'la-paz' ? laPaz :
                                (departmentName === 'la-union' ? laUnion :
                                    (departmentName === 'morazan' ? morazan :
                                        (departmentName === 'san-miguel' ? sanMiguel :
                                            (departmentName === 'san-salvador' ? sanSalvador :
                                                (departmentName === 'san-vicente' ? sanVicente :
                                                    (departmentName === 'santa-ana' ? santaAna :
                                                        (departmentName === 'sonsonate' ? sonsonate :
                                                            usulutan))))))))))));

    imgMunicipio.setAttribute('src', departmentObject.imgMunicipio);
    imgBanner.setAttribute('style',`background-image: URL(${departmentObject.banner});`);

    imprimirDatos(divDatos, departmentObject.datos);
    imprimirDatos(divMunicipios, departmentObject.municipios);
    imprimirDatos(divTurismo, departmentObject.turismo);
    imprimirDatos(divRios, departmentObject.rios);
    departmentObject.lagos ? imprimirDatos(divLagos, departmentObject.lagos) : imprimirNoDatos(divLagos, 'lagos');
    imprimirDatos(divCerros, departmentObject.cerros);
    departmentObject.personajes ? imprimirDatos(divPersonajes, departmentObject.personajes) : imprimirNoDatos(divPersonajes, 'personajes históricos');
    departmentObject.bandas ? imprimirDatos(divBandas, departmentObject.bandas) : imprimirNoDatos(divBandas, 'bandas musicales');
}