import React from "react";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { getTypeName } from "@/lib/utils";
import { Models } from "node-appwrite";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  const files = await getFiles();

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{getTypeName(type)}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Toplam : <span className="h5">0 MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sıralama :</p>

            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <h1 className="h1" key={file.$id}>
              {file.name}
            </h1>
          ))}
        </section>
      ) : (
        <p className="empty-list">Dosya bulunamadı</p>
      )}
    </div>
  );
};

export default Page;
