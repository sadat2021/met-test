import Item from "./Item";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

interface ContentProps {
  error: boolean;
  loading: boolean;
  endListLoading: boolean;
  items: {
    status: number;
    data?: {
      title: string;
      department: string;
      primaryImage: string;
      objectID: number;
    };
  }[];
}

export default function Content({
  error,
  endListLoading,
  loading,
  items,
}: ContentProps) {
  return (
    <div className="flex flex-row flex-wrap">
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {items.map((item) => {
        if (item.status !== 200) {
          return null;
        }
        return (
          <Item
            key={item.data?.objectID}
            title={item.data?.title || ""}
            primaryImage={item.data?.primaryImage || ""}
            department={item.data?.department || ""}
          />
        );
      })}
      {endListLoading && <Loader />}
    </div>
  );
}
