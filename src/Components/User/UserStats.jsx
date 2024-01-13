import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api/api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import UserStatsGraphs from './UserStatsGraphs'

function UserStats() {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }

    getData()
  }, [request])

  if (loading) <Loading />
  if (error) <Error error={error} />
  if (data)
    return (
      <div>
        <UserStatsGraphs data={data} />
      </div>
    )
  else return null
}

export default UserStats
