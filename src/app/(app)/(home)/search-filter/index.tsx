import { Categories } from "./categories";
import { SearchInput } from "./search-input";

interface Props {
    data: any;
}

export const SearchFilters = ({data,}: Props) => {
    return (
        <div className="px-4 ls:px-12 py-8 border-b flex flex-col gap-4 w-full">
            <SearchInput data={data} />
            <div className="hidden lg:block">
                <Categories data={data}/>
            </div>
            {/* {JSON.stringify(data, null, 2)} */}
        </div>
    )
}