import Layout from "@/components/Layout";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-5xl font-bold text-brown-dark mb-4">{title}</h1>
        <p className="text-gray-600 text-lg mb-8">
          This page is coming soon. Keep checking back for updates!
        </p>
        <p className="text-gray-500">
          Let us know what you'd like to see here, and we'll build it for you.
        </p>
      </div>
    </Layout>
  );
}
