export const nestedItems = [
  {
    item: 'store', id: 'store', toggleHierarchy: false, nested: [
      {
        item: 'milk', id: 'store milk', toggleHierarchy: false, nested: [
          {
            item: 't23', id: 'store milk t23', toggleHierarchy: false, nested: [
              {
                item: 'last', id: 'store milk last', toggleHierarchy: false, nested: null
              },
              {
                item: 'last2', id: 'store milk last2', toggleHierarchy: false, nested: [
                  {
                    item: 'last', id: 'store milk last2 last', nested: null
                  }
                ]
              }
            ]
          }
        ]
      },
      { item: 'cerial', id: 'store cerial', toggleHierarchy: false, nested: null },
      // {
      //   item: 'yogart', nested: [
      //     { item: 'dairy' },
      //     { item: 'cow' },
      //   ]
      // },
    ]
  },
  { item: 'freds', id: 'store freds', toggleHierarchy: false, nested: null },
  {
    item: 'pc', id: 'store pc', toggleHierarchy: false, nested: [
      { item: 'lol', id: 'store lol', toggleHierarchy: false, nested: null },
      { item: 'MC', id: 'store MC', toggleHierarchy: false, nested: null }
    ]
  },
]