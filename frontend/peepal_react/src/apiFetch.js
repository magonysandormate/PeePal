export async function mosdokFetch() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/mosdok');
        if (!response.ok) {
            throw new Error(`Hiba: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Hiba történt az adatok lekérésekor:", error);
        return [];
    }
}