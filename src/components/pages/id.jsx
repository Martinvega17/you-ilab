import React, { useState } from 'react';
import salvador from '../../assets/team/salvador.jpg';
import viridiana from '../../assets/team/viridiana.jpg';
import lourdes from '../../assets/team/lourdes.jpg';
import miguel from '../../assets/team/miguel.jpg';
import juanjo from '../../assets/team/juanjo.jpg';


const IdPage = () => {
    const [additionalElements, setAdditionalElements] = useState([
        {
            id: 1,
            name: 'Salvador Ruíz Correa',
            profession: 'Doctor en Ingeniería Eléctrica',
            text: 'Salvador Ruiz-Correa tiene los grados de licenciatura y maestría en Ingeniería Eléctrica de la Universidad Nacional Autónoma de México y el de doctorado de la Universidad de Washington en Seattle. Sus intereses se centran en aplicaciones de inteligencia artificial y computación ubicua para el bien social en el Sur Global, con énfasis en México. En el IPICYT es investigador del Centro Nacional de Supercómputo (CNS), director del You-i Lab, miembro del Grupo de Ciencia e Ingeniería Computacional y Coordinador del Diplomado de Inteligencia Artificial Aplicada del CNS. Participa como responsable en México del consorcio WeNet de la Comunidad Europea y organiza la iniciativa de investigación CeMobili con inevstigadores del IDIAP Research Institute en Suiza.',
            showMore: false,
            image: salvador,
        },
        { id: 2, name: 'Viridiana del Carmen Robledo Valero', profession: 'Maestra en Salud Publica', text: 'Viridiana del Carmen Robledo-Valero es Licenciada en Ciencias Ambientales por la Universidad Autónoma de San Luis Potosí y Maestra en Salud Pública por el Instituto Nacional de Salud Pública (INSP, México). Actualmente es estudiante de doctorado del INSP y directora ejecutiva del You-i Lab. Se enfoca en administrar proyectos de salud pública que abordan problemas de salud ambiental y desarrollar plataformas digitales de vigilancia epidemiológica automatizada para la evaluación integrada de riesgos a la salud en comunidades mexicanas.', showMore: false },
        {
            id: 3,
            name: 'María de Lourdes Mendoza Flores',
            profession: 'Maestra en Salud Publica',
            text: 'Dedicada a la identificación de la distribución y determinantes de salud mediante metodología epidemiológica para la toma de decisiones.',
            showMore: false,
            image: lourdes,
        },
        {
            id: 4,
            name: 'Miguel Ángel Martínez Hernández',
            profession: 'Ingeniero en Telecomunicaciones',
            text: 'Miguel Angel Martinez-Hernandez, Ingeniero en Telecomunicaciones de la Universidad Autónoma de San Luis Potosí, es especialista en desarrollo web y Líder de Software en el Youth Innovation Laboratory (You-i Lab).',
            showMore: false,
            image: miguel,
        },
        {
            id: 5,
            name: 'Juan José Domínguez Pérez',
            profession: 'Ingeniero en Sistemas Inteligentes',
            text: 'Juan José Domínguez Pérez tiene el grado de Ingeniería de Sistemas Inteligentes por la Universidad Autónoma de San Luis Potosí. Es asociado de investigación y programador del You-i Lab del IPICYT.',
            showMore: false,
            image: juanjo,
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
        <div className="flex flex-wrap grid grid-cols-3">
            {/* Elemento principal */}
            {/* Elementos adicionales */}
            {additionalElements.map((element) => (
                <div key={element.id} className="w-full max-w-lg bg-white border mb-10 mt-2 mr-8">
                    <div className="flex items-start justify-start px-4 pt-10 mb-5">
                        <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={element.image || viridiana} alt={`${element.name} image`} />
                        <div className="flex flex-col ml-4">
                        <h5 className="mb-1 text-2xl font-normal text-gray-500 dark:text-gray-400 self-start">{element.name}</h5>
                            <span className="text-lg text-gray-500 dark:text-gray-400 self-start h-full">{element.profession}</span>
                            <div className="flex justify-start">
                                <button
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                                    onClick={() => handleToggleMore(element.id)}
                                >
                                    <i className={`fa ${element.showMore ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'}`} />
                                    <span className="mr-1 ml-2">More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {element.showMore && (
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded mt-5">
                            <p className="text-gray-700 dark:text-gray-300">{element.text}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default IdPage;