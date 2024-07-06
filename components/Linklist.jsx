export default function LinkList({ links }) {
  return (
      <div className="flex flex-col">
          {links.map((link, index) => (
              <a key={index} href="#" className="m-2 no-underline text-gray-700 text-base font-sans transition-colors duration-500 p-4 hover:bg-gray-200 hover:text-blue-600 rounded-lg">{link}</a>
          ))}
      </div>
  );
}