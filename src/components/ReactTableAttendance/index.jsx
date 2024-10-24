import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

const variants = {
    simple: "bg-foundation__primary_color-p50-1",
};

const sizes = {
    xs: "py-1.5",
    sm: "py-2",
};

const ReactTableAttendance = ({
  columns,
  data = [],
  headerProps = {},
  headerCellProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  cellProps = { className: "" },
  size,
  variant,
  ...restConfig
}) => {
  // Memoize table configuration to avoid unnecessary re-renders
  const tableConfig = {
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      ...restConfig,
    };

  const table = useReactTable(tableConfig);

  
    // Render the UI for your table
  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th  key={header.id} {...header.column.columnDef?.meta} {...headerCellProps}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
            <tr
                {...rowDataProps}
                className={`${variant ? variants[variant] : ""} ${rowDataProps?.className}`}
                key={row.id}
            >
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={`${size ? sizes[size] : ""} ${cellProps?.className}`}>
                        {flexRender(cell.coluumn.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        ))}
      </tbody>
    </table>
  );
};

ReactTableAttendance.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  headerProps: PropTypes.object,
  bodyProps: PropTypes.object,
  className: PropTypes.string,
  rowDataProps: PropTypes.object,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  restConfig: PropTypes.object,
};

export default ReactTableAttendance;
