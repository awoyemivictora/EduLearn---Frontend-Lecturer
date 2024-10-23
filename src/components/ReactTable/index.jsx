import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

const sizes = {
  xs: "p-2",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const ReactTable = ({
  columns,
  data = [],
  headerProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  size = "md", // Default size
  ...restConfig
}) => {
  // Memoize table configuration to avoid unnecessary re-renders
  const tableConfig = useMemo(
    () => ({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      ...restConfig,
    }),
    [columns, data, restConfig],
  );

  const table = useReactTable(tableConfig);

  if (!columns || columns.length === 0) {
    console.error("No columns provided to ReactTable");
    return <p>No data available</p>;
  }

  return (
    <table className={`table-auto ${className}`}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                {...header.column.columnDef?.meta}
                aria-label={header.isPlaceholder ? "" : header.id}
                className="px-4 py-2 border-b"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <tr
              {...rowDataProps}
              className={`${rowDataProps?.className} hover:bg-gray-100 ${size ? sizes[size] : ""}`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`border-t px-4 py-2 ${size ? sizes[size] : ""}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center p-4">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

ReactTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  headerProps: PropTypes.object,
  bodyProps: PropTypes.object,
  className: PropTypes.string,
  rowDataProps: PropTypes.object,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  restConfig: PropTypes.object,
};

export default ReactTable;
