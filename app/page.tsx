"use client";


export default function Home() {
  return (
    <main>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          
          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'},
          ]

          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
