interface IGetTotalPages {
  page: number;
  pageSize: number;
}

function getOffset({ page, pageSize }: IGetTotalPages) {
  return pageSize * (page - 1);
}

export { getOffset };
