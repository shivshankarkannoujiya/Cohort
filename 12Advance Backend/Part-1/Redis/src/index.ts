import express from "express";
import type { Application, Request, Response } from "express";
import axios from "axios";
import { Redis } from "ioredis";

// TODO: Create new Instance of Redis
const redis = new Redis({
  host: "localhost",
  port: Number(6379),
});

const app: Application = express();
const PORT: number = Number(process.env.PORT ?? 8000);

// TODO: basic rate-limiter
app.use(async function (req, res, next) {
  const userId = 1 // get dynamically
  const key = `rate-limit/${userId}`;
  const value = await redis.get(key);

  if (value === null) {
    redis.set(key, 0);
    redis.expire(key, 60);
  }

  if (Number(value) > 10) {
    return res.status(429).json({ message: "To many requests" });
  }

  redis.incr(key);
  next();
});

app.get("/", (_: Request, res: Response) => {
  return res.status(200).json({ success: true });
});

app.get("/books/total", async (_: Request, res: Response) => {
  // TODO: check in cache
  const cachedValue = await redis.get("totalPageValue");
  if (cachedValue) {
    console.log(`CACHE HIT....`);
    return res.status(200).json({
      success: true,
      totalPageCount: Number(cachedValue),
      message: "Total Page Count fetched",
    });
  }

  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/books`
    );

    const total = response.data?.data?.data;
    const totalPageCount = total?.reduce(
      (acc: number, currVal: { volumeInfo: { pageCount?: number } }) =>
        !currVal.volumeInfo.pageCount ? 0 : currVal?.volumeInfo.pageCount + acc,
      0
    );

    // TODO: set the cache
    await redis.set("totalPageValue", totalPageCount);

    console.log(`CACHE MISSED...`);
    return res.status(200).json({
      success: true,
      totalPageCount,
      message: "Total Page Count fetched",
    });
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching total page count",
    });
  }
});

app.get("/books", async (_: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/books`
    );
    return res.status(200).json({
      success: true,
      response: response.data,
      message: "Books fetched successfully",
    });
  } catch (error) {
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
