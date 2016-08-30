#### Bootstrap notes

##### Containers, rows and columns  
from http://v4-alpha.getbootstrap.com/layout/grid/
* There are three major components—containers, rows, and columns.
* Containers—.container for fixed width or .container-fluid for full width—center your site’s contents and help align your grid content.
* Rows are horizontal groups of columns that ensure your columns are lined up properly.
* Content should be placed within columns, and only columns may be immediate children of rows.
* Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So if you want three equal-width columns, you’d use .col-sm-4.
* Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
* Columns have horizontal padding to create the gutters between individual columns.
* There are five grid tiers, one for each responsive breakpoint: extra small, small, medium, large, and extra large.
* Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices).