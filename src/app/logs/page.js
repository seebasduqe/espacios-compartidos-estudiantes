"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await axios.get('/api/list_logs');
                console.log(response);
                setLogs(response.data);
            } catch (error) {
                console.error('Error fetching areas comunes:', error);
            }
        };

        fetchLogs();
    }, []);


    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/eliminar_area_comun`, { data: { id } });
            console.log(response);
        } catch (error) {
            console.error('Error deleting area:', error);
        }
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <h1 className="text-4xl font-bold text-white">
                Logs
            </h1>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <div className="flex justify-center">
                    <Image src="/images/logo.png" width={800} height={10} />
                </div>

                <div className="overflow-x-auto mx-auto lg:mx-0">
                    <h2 className="text-xl font-semibold text-gray-200 text-center mb-6">Logs Areas Comunes</h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Acción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Descripción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Usuario</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Fecha</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">

                            {logs.filter((log) => log.tipo === 1).map((log) => (
                                <tr key={log.id}>
                                    <td className="px-6 py-4 text-sm text-gray-300">{log.accion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.descripcion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.nombre} {log.apellido1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400"> {new Date(log.fecha).toLocaleString('es-CO', {
                                        weekday: 'short',
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        second: 'numeric'
                                    })}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-x-2">
                                            {log.estado === 1 ? (
                                                <span className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                                                    Éxito
                                                </span>
                                            ) : log.estado === 0 ? (
                                                <span className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                                    Error
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1" />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto mx-auto lg:mx-0">
                    <h2 className="text-xl font-semibold text-gray-200 text-center mb-6">Logs Reservas</h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Acción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Descripción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Usuario</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Fecha</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">

                            {logs.filter((log) => log.tipo === 2).map((log) => (
                                <tr key={log.id}>
                                    <td className="px-6 py-4 text-sm text-gray-300">{log.accion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.descripcion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.nombre} {log.apellido1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400"> {new Date(log.fecha).toLocaleString('es-CO', {
                                        weekday: 'short',
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        second: 'numeric'
                                    })}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-x-2">
                                            {log.estado === 1 ? (
                                                <span className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                                                    Éxito
                                                </span>
                                            ) : log.estado === 0 ? (
                                                <span className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                                    Error
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1" />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto mx-auto lg:mx-0">
                    <h2 className="text-xl font-semibold text-gray-200 text-center mb-6">logs Usuarios</h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Acción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Descripción</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Usuario</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Fecha</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">

                            {logs.filter((log) => log.tipo === 3).map((log) => (
                                <tr key={log.id}>
                                    <td className="px-6 py-4 text-sm text-gray-300">{log.accion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.descripcion}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{log.nombre} {log.apellido1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400"> {new Date(log.fecha).toLocaleString('es-CO', {
                                        weekday: 'short',
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        second: 'numeric'
                                    })}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-x-2">
                                            {log.estado === 1 ? (
                                                <span className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                                                    Éxito
                                                </span>
                                            ) : log.estado === 0 ? (
                                                <span className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                                    Error
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1" />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <span
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Patrones de Diseño
                </span>
                <span
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    App web Gestion de Espacios
                </span>
                <span
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pablo, Nicole, Sebas, Fabricio y Juan
                </span>
            </footer>
        </div>
    );
}
