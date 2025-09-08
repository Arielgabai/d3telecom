type TestimonialProps = {
  quote: string;
  author: string;
};

export function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <blockquote className="rounded-lg border border-gray-200 p-6 bg-white">
      <p className="text-gray-800">“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-600">{author}</footer>
    </blockquote>
  );
}


