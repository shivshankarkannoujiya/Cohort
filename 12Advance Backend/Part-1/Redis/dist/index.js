import express from "express";
import axios from "axios";
const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const cacheStore = {};
app.get("/", (_, res) => {
    return res.status(200).json({ success: true });
});
app.get("/books/total", async (_, res) => {
    // TODO: check in cache
    if ("totalPageCount" in cacheStore) {
        console.log(`CACHE HIT....`);
        return res.status(200).json({
            success: true,
            totalPageCount: Number(cacheStore.totalPageCount),
            message: "Total Page Count fetched",
        });
    }
    try {
        const response = await axios.get(`https://api.freeapi.app/api/v1/public/books`);
        const total = response.data?.data?.data;
        const totalPageCount = total?.reduce((acc, currVal) => !currVal.volumeInfo.pageCount ? 0 : currVal?.volumeInfo.pageCount + acc, 0);
        // TODO: set the cache
        cacheStore.totalPageCount = totalPageCount;
        console.log(`CACHE MISSED...`);
        return res.status(200).json({
            success: true,
            totalPageCount,
            message: "Total Page Count fetched",
        });
    }
    catch (error) {
        console.error("ERROR: ", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching total page count",
        });
    }
});
app.get("/books", async (_, res) => {
    try {
        const response = await axios.get(`https://api.freeapi.app/api/v1/public/books`);
        return res.status(200).json({
            success: true,
            response: response.data,
            message: "Books fetched successfully",
        });
    }
    catch (error) {
        console.error("ERROR: ", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching Books",
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map