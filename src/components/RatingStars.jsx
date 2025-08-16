export default function RatingStars({ value=0 }) {
  const stars = [1,2,3,4,5]
  return (
    <div className="flex gap-1">
      {stars.map(s=>(
        <span key={s} aria-hidden className={s<=Math.round(value) ? 'text-yellow-400' : 'text-slate-600'}>★</span>
      ))}
    </div>
  )
}
