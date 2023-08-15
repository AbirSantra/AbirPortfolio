const education = {
  name: 'education',
  title: 'Educations',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: "Insititution Name",
      type: 'string'
    },
    {
      name: 'institutionLogo',
      title: "Insititution Logo",
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'field',
      title: "Field of Study",
      type: 'string'
    },
    {
      name: 'location',
      title: "Location",
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      }
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      }
    },
    {
      name: 'score',
      title: 'Score',
      type: 'string'
    }
  ]
}

export default education