import React, { useState } from 'react';
import salvador from '../../assets/team/salvador.jpg';
import viridiana from '../../assets/team/viridiana.jpg';
import lourdes from '../../assets/team/lourdes.jpg';

const IdPage = () => {
    const [additionalElements, setAdditionalElements] = useState([
        { id: 1, name: 'Salvador Ruiz Correa', profession: 'Doctor en Ingenieria Electrica', text: 'Salvador Ruiz-Correa tiene los grados de licenciatura y maestría en Ingeniería Eléctrica de la Universidad Nacional Autónoma de México y el de doctorado de la Universidad de Washington en Seattle. Sus intereses se centran en aplicaciones de inteligencia artificial y computación ubicua para el bien social en el Sur Global, con énfasis en México. En el IPICYT es investigador del Centro Nacional de Supercómputo (CNS), director del You-i Lab, miembro del Grupo de Ciencia e Ingeniería Computacional y Coordinador del Diplomado de Inteligencia Artificial Aplicada del CNS. Participa como responsable en México del consorcio WeNet de la Comunidad Europea y organiza la iniciativa de investigación CeMobili con inevstigadores del IDIAP Research Institute en Suiza.', showMore: false },
        { id: 2, name: 'Viridiana del Carmen Robledo Valero', profession: 'Maestra en Salud Publica', text: 'Viridiana del Carmen Robledo-Valero es Licenciada en Ciencias Ambientales por la Universidad Autónoma de San Luis Potosí y Maestra en Salud Pública por el Instituto Nacional de Salud Pública (INSP, México). Actualmente es estudiante de doctorado del INSP y directora ejecutiva del You-i Lab. Se enfoca en administrar proyectos de salud pública que abordan problemas de salud ambiental y desarrollar plataformas digitales de vigilancia epidemiológica automatizada para la evaluación integrada de riesgos a la salud en comunidades mexicanas.', showMore: false },
        {
            id: 3,
            name: 'María de Lourdes Mendoza Flores',
            profession: 'Maestra en Salud Publica',
            text: 'Dedicada a la identificación de la distribución y determinantes de salud mediante metodología epidemiológica para la toma de decisiones.',
            showMore: false,
            image: lourdes,
        },
        // Agrega aquí los otros 19 elementos con su respectivo texto e imagen
    ]);

    const handleToggleMore = (id) => {
        setAdditionalElements((prevElements) =>
            prevElements.map((element) => {
                if (element.id === id) {
                    return { ...element, showMore: !element.showMore };
                }
                return { ...element, showMore: false };
            })
        );
    };

    return (
        <div className="flex flex-wrap">
            {/* Elemento principal */}
            <div className="w-full max-w-lg bg-white border mb-5">
                <div className="flex items-start justify-between px-4 pt-10">
                    <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={salvador} alt="Salvador Ruiz Correa" />
                    <div className="flex flex-col ml-4">
                        <h5 className="mb-1 text-2xl font-normal text-gray-500 dark:text-gray-400">Salvador Ruiz Correa</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400">Doctor en Ingenieria Electrica</span>
                        <div className="flex flex-row items-center mt-2">
                            <button
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                                onClick={() => handleToggleMore(1)}
                            >
                                <i className={`fa ${additionalElements[0].showMore ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'}`} />
                                <span className="mr-1 ml-2">More</span>
                            </button>
                        </div>
                    </div>
                </div>
                {additionalElements[0].showMore && (
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded mt-5">
                        <p className="text-gray-700 dark:text-gray-300">{additionalElements[0].text}</p>
                    </div>
                )}
            </div>

            {/* Elementos adicionales */}
            {additionalElements.slice(1).map((element, index) => (
                <div key={element.id} className={`w-full max-w-lg bg-white border mb-5 ml-${index === 0 ? '4' : '0'}`}>
                    <div className="flex items-start justify-between px-4 pt-10 mb-5">
                        <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={element.image || viridiana} alt={`${element.name} image`} />
                        <div className="flex flex-col ml-4">
                            <h5 className="mb-1 text-2xl font-normal text-gray-500 dark:text-gray-400">{element.name}</h5>
                            <span className="text-lg text-gray-500 dark:text-gray-400">{element.profession}</span>
                            <div className="flex flex-row items-center mt-2 justify-start">
                                <button
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                                    onClick={() => handleToggleMore(element.id)}
                                >
                                    <i className={`fa ${element.showMore ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'}`} />
                                    <span className="mr-1 ml-2">More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {element.showMore && (
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded mt-2">
                            <p className="text-gray-700 dark:text-gray-300">{element.text}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default IdPage;
