<<<<<<< HEAD
<<<<<<< HEAD
//pagination.js
=======
>>>>>>> 83d012c (newcommit)
=======
//pagination.js
>>>>>>> 6c72f09 (newcommit)
import React from 'react';

class Pagination extends React.Component {
  fetchPageNumbers = () => {
    const totalPages = this.props.totalPages;
    const currentPage = this.props.currentPage;
    const pageNeighbours = this.props.pageNeighbours || 2;

    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [1, ...extraPages, ...pages];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, totalPages];
      } else {
        pages = [1, ...pages, totalPages];
      }

      return pages;
    }

    return range(1, totalPages);
  }

  onPageChange = (page) => {
    this.props.onPageChanged(page);
  }

  render() {
    if (!this.props.totalPages) return null;

    const { currentPage, totalPages } = this.props;
    const pages = this.fetchPageNumbers();

    return (
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={() => this.onPageChange(currentPage - 1)}>Previous</button>
        </li>
        {pages.map((page, index) =>
          <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button type="button" className="page-link" onClick={() => this.onPageChange(page)}>{page}</button>
          </li>
        )}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={() => this.onPageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    );
  }
}

export default Pagination;
