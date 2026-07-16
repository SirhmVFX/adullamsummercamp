"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function HeroTiles() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tiles, setTiles] = useState<{ id: number; lit: boolean }[]>([]);
    const [cols, setCols] = useState(0);
    const TILE_SIZE = 100;

    const buildGrid = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        const c = Math.ceil(el.offsetWidth / TILE_SIZE);
        const r = Math.ceil(el.offsetHeight / TILE_SIZE);
        const count = c * r;
        setCols(c);
        setTiles(Array.from({ length: count }, (_, i) => ({ id: i, lit: false })));
    }, []);

    useEffect(() => {
        buildGrid();
        const ro = new ResizeObserver(buildGrid);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [buildGrid]);

    const lightTile = (id: number) => {
        setTiles((prev) =>
            prev.map((t) => (t.id === id ? { ...t, lit: true } : t))
        );
        setTimeout(() => {
            setTiles((prev) =>
                prev.map((t) => (t.id === id ? { ...t, lit: false } : t))
            );
        }, 600);
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 1 }}
        >
            <div
                className="w-full h-full"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, ${TILE_SIZE}px)`,
                    gridAutoRows: `${TILE_SIZE}px`,
                }}
            >
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        onMouseEnter={() => lightTile(tile.id)}
                        className="border border-white/4 transition-colors duration-300 cursor-default"
                        style={{
                            backgroundColor: tile.lit ? "rgba(249,115,22,0.25)" : "transparent",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
