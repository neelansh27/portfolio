"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
export default function LastLogin() {
    const when = format(Date.now(), "EEE MMM dd HH:mm:ss yyyy");
    const [ip, setIp] = useState<string | null>(null);
    useEffect(() => {
        fetch('/api/get-ip')
            .then((r) => r.json())
            .then((data) => setIp(data.ip))
            .catch((e) => {
                setIp('browser');
            });
    }, []);
    return (
        <div>Last Login: { when } from { ip || "browser" }</div>
    )
}
