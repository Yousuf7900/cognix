import Card from './Card'
import RatingStars from './RatingStars'

export default function ResourceCard({ item }) {
  return (
    <Card className="flex items-center justify-between gap-4">
      <div>
        <div className="font-semibold">{item.name}</div>
        <div className="mt-1 flex gap-2 text-xs text-slate-400">
          <span className="badge">{item.type}</span>
          <span className="badge">{item.course}</span>
          <span className="badge">{item.department}</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <div className="text-sm">Rating</div>
          <RatingStars value={item.rating} />
        </div>
        <button className="btn btn-primary">Download</button>
      </div>
    </Card>
  )
}
