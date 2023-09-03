-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "moviesArray" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "genresArray" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "usersId" INTEGER,
    "imageUrl" TEXT,
    "imageId" TEXT,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publicmovies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "genresArray" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "imageUrl" TEXT,
    "imageId" TEXT,

    CONSTRAINT "Publicmovies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "moviesId" INTEGER,
    "publicmoviesId" INTEGER,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Genres_genre_key" ON "Genres"("genre");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genres" ADD CONSTRAINT "Genres_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genres" ADD CONSTRAINT "Genres_publicmoviesId_fkey" FOREIGN KEY ("publicmoviesId") REFERENCES "Publicmovies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
