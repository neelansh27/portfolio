import clsx from "clsx";
import styles from "@/components/AppWindows/app-windows.module.css";
import TitleBar from "@/components/AppWindows/TitleBar";
import { FiExternalLink } from "react-icons/fi";

type Experience = {
    title: string;
    duration: string;
    company: string;
    companySite: string;
    tasksPerformed: string[];
};

export default function WorkExp() {
    const experiences: Experience[] = [
        {
            title: "NodeJS Backend Developer",
            duration: "Sep 2024 -  Feb 2025",
            company: "ColourDrive",
            companySite: "https://www.colourdrive.in/",
            tasksPerformed: [
                "Migrated a legacy PHP backend to a scalable Node.js/Express.js RESTful API architecture, enhancing maintainability and performance.",
                "Implemented JSON Web Token (JWT) based authentication with access and refresh tokens and rate limiting to secure API endpoints and manage user sessions.",
                "Employed Prisma ORM for SQL database schema design, type-safe query generation, and optimized data access.",
                "Designed and implemented endpoints to manage blog comments, user deals, vendor registration, cost estimation.",
                "Leveraged Node.js RESTful endpoints within a Nuxt.js SPA to deliver a fully dynamic, responsive user interface."
            ],
        }
    ]
    return (
        <div className={clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            <div className="max-w-4xl mx-auto p-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900/70 shadow-md rounded-2xl p-6 mb-6 border-2"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
                                {exp.title}
                            </h2>
                            <span className="text-sm text-zinc-200">{exp.duration}</span>
                        </div>

                        <div className="mb-4">
                            <a
                                href={exp.companySite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-md text-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                                {exp.company}
                                <FiExternalLink className="inline-block text-sm"/>
                            </a>
                        </div>

                        <ul className="list-disc list-inside space-y-2 text-zinc-200 text-md">
                            {exp.tasksPerformed.map((task, idx) => (
                                <li key={idx}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}